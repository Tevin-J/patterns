export interface Dough {
  type: string;
}
export interface Sauce {
  type: string;
}
export interface Clams {
  type: string;
}
export interface Cheese {
  type: string;
}
export interface Pepperoni {
  type: string;
}
export interface Veggies {
  type: string;
}

export class ThinCrustDough implements Dough {
  type = 'Thin';
}

export class ThickCrustDough implements Dough {
  type = 'Thick';
}

export class MarinaraSauce implements Sauce {
  type = 'Marinara';
}

export class PlumTomatoSauce implements Sauce {
  type = 'Plum Tomato';
}

export class FreshClams implements Clams {
  type = 'Fresh';
}

export class FrozenClams implements Clams {
  type = 'Frozen';
}

export class ReggianoCheese implements Cheese {
  type = 'Reggiano';
}

export class MozzarellaCheese implements Cheese {
  type = 'Mozzarella';
}

export class BeefPepperoni implements Pepperoni {
  type = 'Beef';
}

export class PorkPepperoni implements Pepperoni {
  type = 'Pork';
}

export class Onion implements Veggies {
  type = 'Onion';
}

export class Garlic implements Veggies {
  type = 'Garlic';
}

export class Mushroom implements Veggies {
  type = 'Mushroom';
}
