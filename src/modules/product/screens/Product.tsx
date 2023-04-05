import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Text from '../../../shared/components/text/Text';
import { ProductType } from '../../../shared/types/productType';

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, ProductParams>>;

export interface ProductParams {
  product: ProductType;
}

const Product = () => {
  const { params } = useRoute<RouteProp<Record<string, ProductParams>>>();
  const { product } = params;

  return <Text>{product.name}</Text>;
};

export default Product;
