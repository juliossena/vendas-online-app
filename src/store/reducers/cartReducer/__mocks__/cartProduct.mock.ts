import { CartProductType } from '../../../../shared/types/cartType';
import { mockProduct } from '../../productReducer/__mocks__/product.mock';

export const mockCartProduct: CartProductType = {
  amount: 543,
  cartId: 24,
  id: 643,
  productId: mockProduct.id,
  product: mockProduct,
};
