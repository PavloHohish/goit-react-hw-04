import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    heigth: '75%',
    width: '75%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, image }) {
  if (!image) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <img
          src={image.largeImageURL}
          alt={image.tags}
          style={{ width: '100%' }}
        />
      </div>
    </Modal>
  );
}
