import { Pizza } from '../product/pizza.js';
import { PizzaStore } from './store.js';
import {
  ChicagoStyleCheesePizza,
  ChicagoStylePepperoniPizza,
} from '../product/chicago.js';

// concrete creator
export class ChicagoStylePizzaStore extends PizzaStore {
  // implementation of factory method
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new ChicagoStyleCheesePizza();
    } else {
      return new ChicagoStylePepperoniPizza();
    }
  }
}
