import { forwardRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  View,
} from 'react-native';

import { insertMaskInCpf } from '../../functions/cpf';
import { insertMaskInPhone } from '../../functions/phone';
import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { ContainerInput, IconEye, IconSearch } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
  type?: 'cel-phone' | 'cpf';
  iconRight?: string;
  onPressIconRight?: () => void;
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      margin,
      secureTextEntry,
      title,
      errorMessage,
      onChange,
      type,
      iconRight,
      onPressIconRight,
      ...props
    }: InputProps,
    ref,
  ) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      if (onChange) {
        let text = event.nativeEvent.text;
        switch (type) {
          case 'cpf':
            text = insertMaskInCpf(text);
            break;
          case 'cel-phone':
            text = insertMaskInPhone(text);
            break;
          default:
            text = event.nativeEvent.text;
            break;
        }

        onChange({
          ...event,
          nativeEvent: {
            ...event.nativeEvent,
            text,
          },
        });
      }
    };

    const handleOnPressEye = () => {
      setCurrentSecure((current) => !current);
    };

    return (
      <DisplayFlexColumn customMargin={margin}>
        {title && (
          <Text
            margin="0px 0px 4px 8px"
            color={theme.colors.grayTheme.gray100}
            type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          >
            {title}
          </Text>
        )}

        <View>
          <ContainerInput
            {...props}
            hasSecureTextEntry={secureTextEntry}
            secureTextEntry={currentSecure}
            isError={!!errorMessage}
            onChange={handleOnChange}
            ref={ref}
          />
          {secureTextEntry && (
            <IconEye
              onPress={handleOnPressEye}
              name={currentSecure ? 'eye' : 'eye-blocked'}
              size={20}
            />
          )}
          {iconRight && <IconSearch name="search" size={14} onPress={onPressIconRight} />}
        </View>
        {errorMessage && (
          <Text
            margin="0px 0px 0px 8px"
            type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
            color={theme.colors.orangeTheme.orange80}
          >
            {errorMessage}
          </Text>
        )}
      </DisplayFlexColumn>
    );
  },
);

export default Input;
