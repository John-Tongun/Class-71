// Author: John Tongun Wani <John-Tongun-Wani>

class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock; // available inventory
  }
}

class ShoppingCart {
  constructor(customerName, taxRate = 0.19, discountRate = 0) {
    this.customerName = customerName;
    this.items = []; // { product, quantity }
    this.taxRate = taxRate;       // configurable tax
    this.discountRate = discountRate; // percentage discount
  }

  addProduct(product, quantity) {
    if (quantity > product.stock) {
      console.log(`Not enough stock available for ${product.name}.`);
      return;
    }
    this.items.push({ product, quantity });
    product.stock -= quantity; // reduce stock
    console.log(`${quantity} ${product.name}(s) added to cart.`);
  }

  emptyCart() {
    this.items = [];
    console.log("Cart has been emptied.");
  }

  calculateSubtotal() {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  applyDiscount(subtotal) {
    return subtotal - (subtotal * this.discountRate);
  }

  applyTax(amount) {
    return amount + (amount * this.taxRate);
  }

  calculateTotal() {
    let subtotal = this.calculateSubtotal();
    let discounted = this.applyDiscount(subtotal);
    let finalTotal = this.applyTax(discounted);
    return finalTotal;
  }

  purchaseSummary() {
    console.log("----- Purchase Summary -----");
    console.log(`Customer: ${this.customerName}`);
    this.items.forEach(item => {
      console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Price: $${item.product.price}`);
    });
    let subtotal = this.calculateSubtotal();
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Discount Applied: ${this.discountRate * 100}%`);
    let discounted = this.applyDiscount(subtotal);
    console.log(`After Discount: $${discounted.toFixed(2)}`);
    console.log(`Tax Applied: ${this.taxRate * 100}%`);
    let finalTotal = this.calculateTotal();
    console.log(`Final Total: $${finalTotal.toFixed(2)}`);
    console.log("----------------------------");
  }
}

// Example usage
const laptop = new Product("Laptop", 1000, 5);
const phone = new Product("Phone", 500, 2);

const cart = new ShoppingCart("John Doe", 0.19, 0.10); // 19% tax, 10% discount
cart.addProduct(laptop, 1);
cart.addProduct(phone, 2);
cart.purchaseSummary();
cart.emptyCart();
