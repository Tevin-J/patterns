import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from './ingredients.js';
// this is abstract factory
export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createPepperoni(): Pepperoni;
  createClam(): Clams;
  createVeggies(): Veggies[];
}
