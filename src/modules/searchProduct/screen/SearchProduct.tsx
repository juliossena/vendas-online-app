import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';

import { MethodEnum } from '../../../enums/methods.enum';
import Text from '../../../shared/components/text/Text';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import { useRequest } from '../../../shared/hooks/useRequest';
import { PaginationType } from '../../../shared/types/paginationType';
import { ProductType } from '../../../shared/types/productType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';

export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

export interface SearchProductParams {
  search?: string;
}

const SearchProduct = () => {
  const { searchProducts, setSearchProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { search } = params;
  const { request } = useRequest();

  useEffect(() => {
    request<PaginationType<ProductType[]>>({
      url: `${URL_PRODUCT_PAGE}?search=${search}`,
      method: MethodEnum.GET,
      saveGlobal: setSearchProducts,
    });
  }, [search]);

  return (
    <>
      {searchProducts && <Text>Tem produto</Text>}
      <Text>Qualquer coisa</Text>
    </>
  );
};

export default SearchProduct;
