import { PizzaIngredientFactory } from './ingredient-factory.js';
import {
  BeefPepperoni,
  Cheese,
  Clams,
  Dough,
  FreshClams,
  Garlic,
  MarinaraSauce,
  Mushroom,
  Onion,
  Pepperoni,
  ReggianoCheese,
  Sauce,
  ThinCrustDough,
  Veggies,
} from './ingredients.js';

export class NyPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createClam(): Clams {
    return new FreshClams();
  }

  createPepperoni(): Pepperoni {
    return new BeefPepperoni();
  }

  createVeggies(): Veggies[] {
    return [new Garlic(), new Onion(), new Mushroom()];
  }
}
