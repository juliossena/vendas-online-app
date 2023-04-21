/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react-native';
import { act } from 'react-test-renderer';

import { mockCreateUser } from '../../__mocks__/createUser.mock';
import { DEFAULT_CREATE_USER, useCreateUser } from '../useCreateUser';

const mockReset = jest.fn();
const mockRequest = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    reset: mockReset,
  }),
}));

jest.mock('../../../../shared/hooks/useRequest', () => ({
  useRequest: () => ({
    request: mockRequest,
    loading: false,
  }),
}));

describe('useCreateUser', () => {
  it('should return create user default', () => {
    const { result } = renderHook(() => useCreateUser());

    expect(result.current.createUser).toEqual(DEFAULT_CREATE_USER);
  });

  it('should change createUser after onChangeInput', () => {
    const { result } = renderHook(() => useCreateUser());

    const mockText = 'fdlskja';

    const event: any = {
      nativeEvent: {
        text: mockText,
      },
    };

    act(() => {
      result.current.handleOnChangeInput(event, 'cpf');
    });

    expect(result.current.createUser.cpf).toEqual(mockText);
  });

  it('should set disabled after insert all data', () => {
    const { result } = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.confirmPassword,
          },
        } as any,
        'confirmPassword',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.confirmPassword,
          },
        } as any,
        'password',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.cpf,
          },
        } as any,
        'cpf',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.email,
          },
        } as any,
        'email',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.name,
          },
        } as any,
        'name',
      );
    });

    expect(result.current.disabled).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.phone,
          },
        } as any,
        'phone',
      );
    });

    expect(result.current.disabled).toEqual(false);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.password,
          },
        } as any,
        'password',
      );
    });

    expect(result.current.disabled).toEqual(true);
  });

  it('should call request in create user', () => {
    const { result } = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleCreateUser();
    });

    expect(mockRequest).toBeCalled();
  });

  it('should not call reset in create user if return undefined', () => {
    const { result } = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleCreateUser();
    });

    expect(mockReset).not.toBeCalled();
  });
});
