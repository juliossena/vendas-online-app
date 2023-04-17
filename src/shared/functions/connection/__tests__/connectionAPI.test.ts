/* eslint-disable jest/valid-expect */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { MethodEnum } from '../../../../enums/methods.enum';
import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../../constants/errosContants';
import { URL_CART } from '../../../constants/urls';
import ConnectionAPI, {
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

  describe('connect', () => {
    it('should return success', async () => {
      mockAxios.onGet(URL_CART).reply(200, mockReturnValue);

      const returnGet = await ConnectionAPI.connect(URL_CART, MethodEnum.GET);

      expect(returnGet).toEqual(mockReturnValue);
    });

    it('should return error 401', async () => {
      mockAxios.onGet(URL_CART).reply(401);

      expect(ConnectionAPI.connect(URL_CART, MethodEnum.GET)).rejects.toThrowError(
        Error(ERROR_ACCESS_DANIED),
      );
    });

    it('should return error 403', async () => {
      mockAxios.onGet(URL_CART).reply(403);

      expect(ConnectionAPI.connect(URL_CART, MethodEnum.GET)).rejects.toThrowError(
        Error(ERROR_ACCESS_DANIED),
      );
    });

    it('should return error 400', async () => {
      mockAxios.onGet(URL_CART).reply(400);

      expect(ConnectionAPI.connect(URL_CART, MethodEnum.GET)).rejects.toThrowError(
        Error(ERROR_CONNECTION),
      );
    });
  });

  describe('test call', () => {
    it('should header send authorization', async () => {
      const spyAxios = jest.spyOn(axios, 'get');

      mockAxios.onGet(URL_CART).reply(200, mockReturnValue);

      await ConnectionAPI.call(URL_CART, MethodEnum.GET);

      expect(spyAxios.mock.calls[0][1]?.headers).toEqual({
        Authorization: mockToken,
        'Content-Type': 'application/json',
      });
    });
  });
});
