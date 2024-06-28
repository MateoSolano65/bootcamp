import Producto from './Producto.js';

class Food extends Producto {
  constructor(id, name, price, expirationDate, calories) {
    super(id, name, price);
    this.expirationDate = expirationDate;
    this.calories = calories;
  }

  isExpired() {
    return new Date() > this.expirationDate;
  }

  getDetails() {
    return `${super.getDetails()}, Expiration Date: ${this.expirationDate}, Calories: ${this.calories}`;
  }
}

export default Food;
