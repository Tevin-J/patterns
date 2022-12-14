import { PizzaStore } from './creator/store.js';
import { NyStylePizzaStore } from './creator/ny.js';
import { ChicagoStylePizzaStore } from './creator/chicago.js';

export function factoryMethodDemonstrate(): void {
  // create instance of concrete creator
  const nyPizzaStore: PizzaStore = new NyStylePizzaStore();
  nyPizzaStore.orderPizza('cheese');

  const chicagoPizzaStore: PizzaStore = new ChicagoStylePizzaStore();
  chicagoPizzaStore.orderPizza('pepperoni');
}
