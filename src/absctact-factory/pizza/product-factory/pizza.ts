import { Pizza } from './pizza-abstract.js';
import { PizzaIngredientFactory } from '../ingredient-factory/ingredient-factory.js';

export class CheesePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = 'cheese';
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log(`Preparing ${this.name}...`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}

export class PepperoniPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = 'pepperoni';
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log(`Preparing ${this.name}...`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.pepperoni = this.ingredientFactory.createPepperoni();
  }
}
