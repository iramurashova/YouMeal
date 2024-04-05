import { RootStore } from "../store";

export const selectItem= (store: RootStore )=> store.item.item;