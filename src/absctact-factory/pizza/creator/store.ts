import { Pizza } from '../product-factory/pizza-abstract.js';

// abstract class creator of product-factory
export abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza: Pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  // this is abstract factory method
  abstract createPizza(type: string): Pizza;
}
