import React from 'react';
import ModalComponent from 'react-modal';

ModalComponent.setAppElement('#root');

export const Modal = ({
  isOpen,
  onRequestClose,
  style,
  contentLabel,
  largeImageURL,
  tags,
}) => {
  const customStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      position: 'fixed',
      zIndex: 9, // Set the desired z-index for the overlay
    },
    content: {
      backgroundColor: 'transparent',
      border: 'none',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10, // Set the desired z-index for the modal content
      // Add other styles if needed
    },
  };
  return (
    <ModalComponent
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ ...style, ...customStyle }}
      contentLabel={contentLabel}
    >
      <img src={largeImageURL} alt={tags} width="850" />
    </ModalComponent>
  );
};

// import React from 'react';
// import ModalComponent from 'react-modal';

// ModalComponent.setAppElement('#root');

// export const Modal = ({
//   isOpen,
//   onRequestClose,
//   contentLabel,
//   largeImageURL,
//   tags,
// }) => {
//   const customStyles = {
//     overlay: {
//       alignItems: 'center',
//       backgroundColor: 'rgba(0, 0, 0, 0.8)',
//       display: 'flex',
//       height: '100vh',
//       justifyContent: 'center',
//       left: '0',
//       position: 'fixed',
//       top: '0',
//       width: '100vh',
//       zIndex: 9, // Set the z-index for the overlay
//     },
//     content: {
//       backgroundColor: 'transparent',
//       transform: 'translate(-50%, -50%)',
//       border: 'none',
//       bottom: 'auto',
//       left: '50%',
//       marginRight: '-50%',
//       right: 'auto',
//       top: '50%',
//       zIndex: 10,
//     },
//   };

//   return (
//     <ModalComponent
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={customStyles}
//       contentLabel={contentLabel}
//     >
//       <img src={largeImageURL} alt={tags} width="100%" />
//     </ModalComponent>
//   );
// };
