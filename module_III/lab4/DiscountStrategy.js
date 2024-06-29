class DiscountStrategy {
    applyDiscount(price) {
      throw new Error('applyDiscount() must be implemented');
    }
  
    getApplicableDays() {
      throw new Error('getApplicableDays() must be implemented');
    }
  }
  
  export default DiscountStrategy;