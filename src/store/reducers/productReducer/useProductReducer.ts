import { useDispatch } from 'react-redux';

import { ProductType } from '../../../shared/types/productType';
import { useAppSelector } from '../../hooks';
import { setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productReducer);

  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };

  return {
    products,
    setProducts,
  };
};
