
import { selectCartList } from "../services/cartReducer/selector";
import { editCartList } from "../services/cartReducer/cartReducer";
import Button from "./Button";
import { TCartItem } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../services/types";

type TAddProductButtonProps = {
  item: TCartItem;
};
function AddProductButton({ item }: TAddProductButtonProps) {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector(selectCartList);
  const onClick = () => {
    const newItemIndex = cartList.findIndex((el) => el._id === item._id);

    if (newItemIndex !== -1) {
      const updatedCartList = cartList.map((el) =>
        el._id === item._id ? { ...el, count: el.count && el.count + 1 } : el
      );

      dispatch(editCartList(updatedCartList));
    } else {
      const newItem = { ...item, count: 1 };
      dispatch(editCartList([...cartList, newItem]));
    }
  };
  return <Button text="Добавить" type="secondary" onClick={onClick} />;
}

export default AddProductButton;
