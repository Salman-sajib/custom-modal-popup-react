import { useState } from 'react';
import Modal from './Modal';

function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function handleCloseModal() {
    setShowModalPopup(false);
  }

  return (
    <div className='p-4'>
      <button
        className=' bg-blue-600 text-white px-4 py-2 rounded-md transition-colors hover:bg-blue-700'
        onClick={handleToggleModalPopup}
      >
        Open Modal Popup
      </button>

      {showModalPopup && <Modal CloseModal={handleCloseModal} />}
    </div>
  );
}

export default ModalTest;
