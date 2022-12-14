import { Pizza } from '../product/pizza.js';
import { PizzaStore } from './store.js';
import { NyStyleCheesePizza, NyStylePepperoniPizza } from '../product/ny.js';

// concrete creator
export class NyStylePizzaStore extends PizzaStore {
  // implementation of factory method
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new NyStyleCheesePizza();
    } else {
      return new NyStylePepperoniPizza();
    }
  }
}
