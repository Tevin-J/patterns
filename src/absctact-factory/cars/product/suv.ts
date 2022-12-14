import { AbstractCar } from './car.js';

export class Suv implements AbstractCar {
  type: string;
  model: string;

  constructor(name: string) {
    this.type = 'SUV';
    this.model = name;
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
