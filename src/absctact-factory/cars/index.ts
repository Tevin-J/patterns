/**
 * Клиентский код работает с фабриками и продуктами только через абстрактные
 * типы: Абстрактная Фабрика и Абстрактный Продукт. Это позволяет передавать
 * любой подкласс фабрики или продукта клиентскому коду, не нарушая его.
 */
import { AbstractFactory } from './creator/car-factory.js';
import { FordFactory } from './creator/ford.js';
import { KiaFactory } from './creator/kia.js';

/**
 * Клиентский код может работать с любым конкретным классом фабрики.
 */
export function abstractFactoryCarsDemonstrate(): void {
  console.log('\nClient: testing Ford Factory');
  const fordFactory: AbstractFactory = new FordFactory();
  const focus = fordFactory.createSedan();
  const explorer = fordFactory.createSuv();
  focus.demonstrate();
  explorer.demonstrate();

  console.log('\nClient: testing Kia Factory');
  const kiaFactory: AbstractFactory = new KiaFactory();
  const rio = kiaFactory.createSedan();
  const sorento = kiaFactory.createSuv();
  rio.demonstrate();
  sorento.demonstrate();
}
