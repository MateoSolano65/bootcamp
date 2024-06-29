import Producto from './Producto.js';

class Electronics extends Producto {
  constructor(id, name, price, warrantyPeriod, brand, discountStrategy = null) {
    super(id, name, price, discountStrategy);
    this.warrantyPeriod = warrantyPeriod;
    this.brand = brand;
  }

  getWarrantyDetails() {
    return `Warranty Period: ${this.warrantyPeriod} years, Brand: ${this.brand}`;
  }

  getDetails() {
    return `${super.getDetails()}, Warranty: ${this.getWarrantyDetails()}`;
  }
}

export default Electronics;
