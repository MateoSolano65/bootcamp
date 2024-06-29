import Food from './Food.js';
import Electronics from './Electronics.js';
import TenPercentDiscount from './TenPercentDiscount.js';
import TwentyPercentDiscount from './TwentyPercentDiscount.js';

const tenPercentDiscount = new TenPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();

const apple = new Food(1, 'Apple', 1.5, new Date('2024-07-01'), 95, tenPercentDiscount);
console.log(apple.getDetails());
console.log(`Price with discount: ${apple.getPriceWithDiscount()}`);
console.log(`Discount applicable on: ${apple.getDiscountDays().join(', ')}`);

const phone = new Electronics(2, 'Smartphone', 699, 2, 'TechBrand', twentyPercentDiscount);
console.log(phone.getDetails());
console.log(`Price with discount: ${phone.getPriceWithDiscount()}`);
console.log(`Discount applicable on: ${phone.getDiscountDays().join(', ')}`);