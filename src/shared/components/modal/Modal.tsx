import { Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';

import { theme } from '../../themes/theme';
import Button from '../button/Button';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { modalTestId } from './__mocks__/modal.testid';
import { ContainerModal, IconCloseModal } from './modal.style';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact animationType="slide" transparent={true} onRequestClose={onCloseModal} {...props}>
      <ContainerModal>
        <Text
          testID={modalTestId.MODAL_TITLE}
          type={textTypes.PARAGRAPH_SEMI_BOLD}
          color={theme.colors.mainTheme.primary}
        >
          {title}
        </Text>
        <Text testID={modalTestId.MODAL_TEXT}>{text}</Text>
        <Button testID={modalTestId.MODAL_CLOSE_BUTTON} title="OK" onPress={onCloseModal} />
        <IconCloseModal testID={modalTestId.MODAL_CLOSE_ICON} onPress={onCloseModal} name="cross" />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
