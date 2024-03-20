function Modal({ CloseModal }) {
  return (
    <div className=' fixed z-10 pt-40 left-0 top-0 w-full h-full overflow-auto bg-green-500'>
      <div className=' w-4/5 relative bg-slate-200 m-auto p-0 border border-red-500 flex flex-col items-center '>
        <div>
          <span className='text-2xl cursor-pointer' onClick={CloseModal}>
            &times;
          </span>
          <h2>Header</h2>
        </div>
        <div>
          <p>This is the modal body.</p>
        </div>
        <div>
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
}

export default Modal;
