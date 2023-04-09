import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import { MethodEnum } from '../../../enums/methods.enum';
import { ProductNavigationProp } from '../../../modules/product/screens/Product';
import { URL_CART } from '../../constants/urls';
import { MenuUrl } from '../../enums/MenuUrl.enum';
import { convertNumberToMoney } from '../../functions/money';
import { useRequest } from '../../hooks/useRequest';
import { theme } from '../../themes/theme';
import { CartRequest } from '../../types/cartRequest';
import { ProductType } from '../../types/productType';
import { Icon } from '../icon/Icon';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import {
  ProductImage,
  ProductInsertCart,
  ProductThumbnailContainer,
} from './productThumbnail.style';

interface ProductThumbnailProps {
  product: ProductType;
  margin?: string;
}

const AMOUNT_DEFAULT = 1;

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
  const { navigate } = useNavigation<ProductNavigationProp>();
  const { request, loading } = useRequest();

  const handleInsertProductInCart = () => {
    request<unknown, CartRequest>({
      url: URL_CART,
      method: MethodEnum.POST,
      body: {
        productId: product.id,
        amount: AMOUNT_DEFAULT,
      },
      message: 'Inserido com sucesso!',
    });
  };

  const handleGoToProduct = () => {
    navigate(MenuUrl.PRODUCT, {
      product,
    });
  };

  return (
    <ProductThumbnailContainer onPress={handleGoToProduct} margin={margin}>
      <ProductImage source={{ uri: product.image }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.PARAGRAPH_SEMI_BOLD}>
        {convertNumberToMoney(product.price)}
      </Text>
      <ProductInsertCart onPress={handleInsertProductInCart}>
        {loading ? (
          <ActivityIndicator color={theme.colors.neutralTheme.white} />
        ) : (
          <Icon name="cart" color={theme.colors.neutralTheme.white} />
        )}
      </ProductInsertCart>
    </ProductThumbnailContainer>
  );
};

export default ProductThumbnail;
