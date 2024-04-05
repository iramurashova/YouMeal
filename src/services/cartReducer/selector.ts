import { RootStore } from "../store";
export const selectCartList = (store: RootStore) => store.cart.list;
export const selectCounter = (store: RootStore) => store.cart.counter;
