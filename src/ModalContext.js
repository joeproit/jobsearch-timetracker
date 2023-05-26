import React from 'react';

export const ModalContext = React.createContext({
  showModal: false,
  modalContent: null,
  setModalContent: () => {},
  toggleModal: () => {}
});
