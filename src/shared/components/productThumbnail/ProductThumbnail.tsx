import { useNavigation } from '@react-navigation/native';

import { ProductNavigationProp } from '../../../modules/product/screens/Product';
import { MenuUrl } from '../../enums/MenuUrl.enum';
import { convertNumberToMoney } from '../../functions/money';
import { theme } from '../../themes/theme';
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

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
  const { navigate } = useNavigation<ProductNavigationProp>();

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
      <ProductInsertCart>
        <Icon name="cart" color={theme.colors.neutralTheme.white} />
      </ProductInsertCart>
    </ProductThumbnailContainer>
  );
};

export default ProductThumbnail;
