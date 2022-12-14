import { Pizza } from './pizza.js';

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago style deep dish cheese pizza';
    this.dough = 'Extra thick crust dough';
    this.sauce = 'Plum tomato sauce';
    this.toppings.push('Shredded Mazzarella cheese');
  }

  cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}

// concrete product-factory
export class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago style deep dish cheese pizza';
    this.dough = 'Extra thick crust dough';
    this.sauce = 'Plum tomato sauce';
    this.toppings.push('Pepperoni sausage');
  }

  cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}
