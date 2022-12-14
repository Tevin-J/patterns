/**
 * Каждый отдельный продукт семейства продуктов должен иметь базовый интерфейс.
 * Все вариации продукта должны реализовывать этот интерфейс.
 */
export interface AbstractCar {
  model: string;
  type: string;
  start(): string;
  stop(): string;
  demonstrate(): void;
}
