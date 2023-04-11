import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PaginationType } from '../../../shared/types/paginationType';
import { ProductType } from '../../../shared/types/productType';

interface ProductStore {
  products: ProductType[];
  searchProducts?: PaginationType<ProductType[]>;
}

const initialState: ProductStore = {
  products: [],
  searchProducts: undefined,
};

export const productSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setSearchProductsAction: (
      state,
      action: PayloadAction<PaginationType<ProductType[]> | undefined>,
    ) => {
      state.searchProducts = action.payload;
    },
  },
});

export const { setProductsAction, setSearchProductsAction } = productSlice.actions;

export default productSlice.reducer;
