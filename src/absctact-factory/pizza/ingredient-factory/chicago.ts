import { PizzaIngredientFactory } from './ingredient-factory.js';
import {
  Cheese,
  Clams,
  Dough,
  FrozenClams,
  MozzarellaCheese,
  Mushroom,
  Onion,
  Pepperoni,
  PlumTomatoSauce,
  PorkPepperoni,
  Sauce,
  ThickCrustDough,
  Veggies,
} from './ingredients.js';

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createClam(): Clams {
    return new FrozenClams();
  }

  createPepperoni(): Pepperoni {
    return new PorkPepperoni();
  }

  createVeggies(): Veggies[] {
    return [new Onion(), new Mushroom()];
  }
}
