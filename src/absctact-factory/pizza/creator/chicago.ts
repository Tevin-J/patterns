import { Pizza } from '../product-factory/pizza-abstract.js';
import { PizzaStore } from './store.js';
import { PizzaIngredientFactory } from '../ingredient-factory/ingredient-factory.js';
import { CheesePizza, PepperoniPizza } from '../product-factory/pizza.js';
import { ChicagoPizzaIngredientFactory } from '../ingredient-factory/chicago.js';

// concrete creator
export class ChicagoStylePizzaStore extends PizzaStore {
  ingredientFactory: PizzaIngredientFactory;
  constructor() {
    super();
    this.ingredientFactory = new ChicagoPizzaIngredientFactory();
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
