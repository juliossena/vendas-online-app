import { ProductType } from './productType';

export interface CartProductType {
  id: number;
  cartId: number;
  productId: number;
  amount: number;
  product: ProductType;
}

export interface CartType {
  id: number;
  cartProduct: CartProductType;
}
