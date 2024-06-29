class Producto {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    getDetails() {
      return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }
  }
  
  export default Producto;