import Food from './Food.js';
import Electronics from './Electronics.js';

const apple = new Food(1, 'Apple', 1.5, new Date('2024-07-01'), 95);
console.log(apple.getDetails());
console.log(`Is expired: ${apple.isExpired()}`);

const phone = new Electronics(2, 'Smartphone', 699, 2, 'TechBrand');
console.log(phone.getDetails());
