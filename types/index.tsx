export type TypeCharacteristics = {
  icon: string;
  title: string;
  desc: string;
};

export type TypeProductCatalogue = {
  id: number;
  image: string;
  title: string;
  price: string;
  featured: boolean;
};

export interface CounterState {
  id: number;
  image: string;
  title: string;
  description: string;
}
