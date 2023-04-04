import { useEffect } from 'react';
import { View } from 'react-native';

import { MethodEnum } from '../../../enums/methods.enum';
import Text from '../../../shared/components/text/Text';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { useRequest } from '../../../shared/hooks/useRequest';
import { ProductType } from '../../../shared/types/productType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';

const Home = () => {
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  return (
    <View>
      <Text>HOME</Text>
      {products.map((product) => (
        <Text>{product.name}</Text>
      ))}
    </View>
  );
};

export default Home;
