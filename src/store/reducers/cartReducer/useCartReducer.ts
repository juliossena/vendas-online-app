import { useDispatch } from 'react-redux';

import { CartType } from '../../../shared/types/cartType';
import { useAppSelector } from '../../hooks';
import { setCartAction } from '.';

export const useCartReducer = () => {
  const dispatch = useDispatch();
  const { cart } = useAppSelector((state) => state.cartReducer);

  const setCart = (currentCart: CartType) => {
    dispatch(setCartAction(currentCart));
  };

  return {
    cart,
    setCart,
  };
};
