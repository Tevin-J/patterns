import { Sedan } from '../product/sedan.js';
import { AbstractFactory } from './car-factory.js';
import { Suv } from '../product/suv.js';

/**
 * Каждая Конкретная Фабрика имеет соответствующую вариацию продукта.
 */
export class FordFactory implements AbstractFactory {
  public createSedan(): Sedan {
    return new Sedan('Focus');
  }

  public createSuv(): Suv {
    return new Suv('Explorer');
  }
}
