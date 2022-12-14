import { Pizza } from './pizza.js';

// concrete product-factory
export class NyStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Style sauce and cheese pizza';
    this.dough = 'Thin crust dough';
    this.sauce = 'Marinara sauce';
    this.toppings.push('Grated Reggiano cheese');
  }
}

// concrete product-factory
export class NyStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Style spicy pepperoni pizza';
    this.dough = 'Thin crust dough';
    this.sauce = 'Marinara sauce';
    this.toppings.push('Pepperoni sausage');
  }
}
