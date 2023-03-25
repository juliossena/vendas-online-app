import { TextInputProps } from 'react-native/types';

import { ContainerInput } from './input.style';

type InputProps = TextInputProps;

const Input = ({ ...props }: InputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;
