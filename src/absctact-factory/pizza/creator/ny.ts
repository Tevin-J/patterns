import { Pizza } from '../product-factory/pizza-abstract.js';
import { PizzaStore } from './store.js';
import { CheesePizza, PepperoniPizza } from '../product-factory/pizza.js';
import { PizzaIngredientFactory } from '../ingredient-factory/ingredient-factory.js';
import { NyPizzaIngredientFactory } from '../ingredient-factory/ny.js';

// concrete creator
export class NyStylePizzaStore extends PizzaStore {
  ingredientFactory: PizzaIngredientFactory;
  constructor() {
    super();
    this.ingredientFactory = new NyPizzaIngredientFactory();
  }
  // implementation of factory method
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new CheesePizza(this.ingredientFactory);
    } else {
      return new PepperoniPizza(this.ingredientFactory);
    }
  }
}
