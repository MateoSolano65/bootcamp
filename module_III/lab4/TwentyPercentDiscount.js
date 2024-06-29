import DiscountStrategy from './DiscountStrategy.js';

class TwentyPercentDiscount extends DiscountStrategy {
  applyDiscount(price) {
    return price * 0.8;
  }

  getApplicableDays() {
    return ['Tuesday', 'Thursday'];
  }
}

export default TwentyPercentDiscount;