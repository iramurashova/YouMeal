import { RootStore } from "../store";

export const selectOrderWay = (store: RootStore) => store.order.way;
export const selectOrderDetails = (store: RootStore) => store.order.details
export const selectOrderList = (store: RootStore) => store.order.list;