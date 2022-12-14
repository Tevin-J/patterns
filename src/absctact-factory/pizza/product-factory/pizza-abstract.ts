// class of product-factory
import { Cheese, Dough, Pepperoni, Sauce, Veggies } from '../ingredient-factory/ingredients.js';

export abstract class Pizza {
  name!: string;
  dough!: Dough;
  sauce!: Sauce;
  veggies!: Veggies[];
  cheese!: Cheese;
  pepperoni!: Pepperoni;

  abstract prepare(): void;

  bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
