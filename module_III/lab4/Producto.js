class Producto {
    constructor(id, name, price, discountStrategy = null) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.discountStrategy = discountStrategy;
    }
  
    getDetails() {
      return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }

    getPriceWithDiscount() {
      if (this.discountStrategy) {
        return this.discountStrategy.applyDiscount(this.price);
      }
      return this.price;
    }
  
    getDiscountDays() {
      if (this.discountStrategy) {
        return this.discountStrategy.getApplicableDays();
      }
      return [];
    }
  }
  
  export default Producto;