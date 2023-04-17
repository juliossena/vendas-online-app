import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { URL_CART } from '../../../constants/urls';
import {
  connectionAPIDelete,
  connectionAPIGet,
  connectionAPIPatch,
  connectionAPIPost,
  connectionAPIPut,
} from '../connectionAPI';

const mockAxios = new MockAdapter(axios);
const mockReturnValue = 'mockReturnValue';
const mockToken = 'TOKEN_MOCK';
const BODY_MOCK = { name: 'test' };

jest.mock('../auth', () => ({
  getAuthorizationToken: () => mockToken,
}));

describe('ConnectionAPI', () => {
  describe('connectionAPIGet', () => {
    it('should success get', async () => {
      const spyAxios = jest.spyOn(axios, 'get');
      mockAxios.onGet(URL_CART).reply(200, mockReturnValue);

      const returnGet = await connectionAPIGet(URL_CART);

      expect(returnGet).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
    });
  });

  describe('connectionAPIDelete', () => {
    it('should success delete', async () => {
      const spyAxios = jest.spyOn(axios, 'delete');
      mockAxios.onDelete(URL_CART).reply(200, mockReturnValue);

      const returnDelete = await connectionAPIDelete(URL_CART);

      expect(returnDelete).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
    });
  });

  describe('connectionAPIPost', () => {
    it('should success post', async () => {
      const spyAxios = jest.spyOn(axios, 'post');
      mockAxios.onPost(URL_CART).reply(200, mockReturnValue);

      const returnPost = await connectionAPIPost(URL_CART, BODY_MOCK);

      expect(returnPost).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connectionAPIPut', () => {
    it('should success put', async () => {
      const spyAxios = jest.spyOn(axios, 'put');
      mockAxios.onPut(URL_CART).reply(200, mockReturnValue);

      const returnPut = await connectionAPIPut(URL_CART, BODY_MOCK);

      expect(returnPut).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connectionAPIPatch', () => {
    it('should success patch', async () => {
      const spyAxios = jest.spyOn(axios, 'patch');
      mockAxios.onPatch(URL_CART).reply(200, mockReturnValue);

      const returnPatch = await connectionAPIPatch(URL_CART, BODY_MOCK);

      expect(returnPatch).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_CART);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });
});
