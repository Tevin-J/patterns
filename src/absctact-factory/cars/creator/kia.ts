import { Sedan } from '../product/sedan.js';
import { Suv } from '../product/suv.js';
import { AbstractFactory } from './car-factory.js';

/**
 * Конкретная Фабрика производит семейство продуктов одной вариации. Фабрика
 * гарантирует совместимость полученных продуктов. Обратите внимание, что
 * сигнатуры методов Конкретной Фабрики возвращают абстрактный продукт, в то
 * время как внутри метода создается экземпляр конкретного продукта.
 */
export class KiaFactory implements AbstractFactory {
  public createSedan(): Sedan {
    return new Sedan('Rio');
  }

  public createSuv(): Suv {
    return new Suv('Sorento');
  }
}
