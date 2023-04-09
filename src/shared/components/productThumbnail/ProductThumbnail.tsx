import { theme } from '../../themes/theme';
import { ProductType } from '../../types/productType';
import Button from '../button/Button';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { ProductImage, ProductThumbnailContainer } from './productThumbnail.style';

interface ProductThumbnailProps {
  product: ProductType;
  margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
  return (
    <ProductThumbnailContainer margin={margin}>
      <ProductImage source={{ uri: product.image }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.BUTTON_SEMI_BOLD}>
        {product.price}
      </Text>
      <Button title="Inserir" />
    </ProductThumbnailContainer>
  );
};

export default ProductThumbnail;
