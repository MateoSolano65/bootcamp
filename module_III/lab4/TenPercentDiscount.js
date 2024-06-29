import DiscountStrategy from './DiscountStrategy.js';

class TenPercentDiscount extends DiscountStrategy {
  applyDiscount(price) {
    return price * 0.9;
  }

  getApplicableDays() {
    return ['Monday', 'Wednesday', 'Friday'];
  }
}

export default TenPercentDiscount;