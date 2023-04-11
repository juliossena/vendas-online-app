import { useDispatch } from 'react-redux';

import { PaginationType } from '../../../shared/types/paginationType';
import { ProductType } from '../../../shared/types/productType';
import { useAppSelector } from '../../hooks';
import { setProductsAction, setSearchProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products, searchProducts } = useAppSelector((state) => state.productReducer);

  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };

  const setSearchProducts = (currentProducts?: PaginationType<ProductType[]>) => {
    dispatch(setSearchProductsAction(currentProducts));
  };

  const insertSearchProducts = (currentProducts: PaginationType<ProductType[]>) => {
    dispatch(
      setSearchProductsAction({
        ...currentProducts,
        data: [...(searchProducts?.data || []), ...currentProducts.data],
      }),
    );
  };

  return {
    products,
    searchProducts,
    setProducts,
    setSearchProducts,
    insertSearchProducts,
  };
};
