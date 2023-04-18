import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { buttonTestId } from './__mocks__/button.testid';
import {
  ActivityIndicatorButton,
  ButtonContainer,
  ButtonDisabled,
  ButtonSecondary,
  GradientButton,
} from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, type, disabled, loading, margin, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text testID={buttonTestId.BUTTON_TITLE} type={textTypes.BUTTON_SEMI_BOLD} color={color}>
        {title}
      </Text>
      {loading && (
        <ActivityIndicatorButton
          testID={buttonTestId.BUTTON_LOADING}
          color={theme.colors.neutralTheme.white}
        />
      )}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled testID={buttonTestId.BUTTON_DISABLED} {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary
          testID={buttonTestId.BUTTON_SECONDARY}
          {...props}
          margin={margin}
          onPress={handleOnPress}
        >
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer
          testID={buttonTestId.BUTTON_DEFAULT}
          margin={margin}
          {...props}
          onPress={handleOnPress}
        >
          <GradientButton
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </GradientButton>
        </ButtonContainer>
      );
  }
};

export default Button;
