export type TItem = {
  _id: string;
  type: string;
  name: string;
  link: string;
  price: string;
  weight: string;
  description: string;
  ingredients: string[];
  calories: string;
};

export type TCartItem = TItem & {
  count?: number;
};

export type TItemNav = {
  name: string;
  link: string;
  id: string;
};
