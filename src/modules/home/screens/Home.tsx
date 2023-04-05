import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { MethodEnum } from '../../../enums/methods.enum';
import Text from '../../../shared/components/text/Text';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { ProductType } from '../../../shared/types/productType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductNavigationProp } from '../../product/screens/Product';

const Home = () => {
  const { navigate } = useNavigation<ProductNavigationProp>();
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  const handleGoToProduct = (product: ProductType) => {
    navigate(MenuUrl.PRODUCT, {
      product,
    });
  };

  return (
    <View>
      <Text>HOME</Text>
      {products.map((product) => (
        <TouchableOpacity onPress={() => handleGoToProduct(product)}>
          <Text>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
