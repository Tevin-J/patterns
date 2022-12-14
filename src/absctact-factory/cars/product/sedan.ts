/**
 * Эти Конкретные Продукты создаются соответствующими Конкретными Фабриками.
 */
import { AbstractCar } from './car.js';

export class Sedan implements AbstractCar {
  type: string;
  readonly model: string;

  constructor(name: string) {
    this.model = name;
    this.type = 'Sedan';
  }

  demonstrate(): void {
    console.log(this.start());
    console.log(this.stop());
  }

  start(): string {
    return `${this.type} ${this.model} engine start`;
  }

  stop(): string {
    return `${this.type} ${this.model} engine stop`;
  }
}
