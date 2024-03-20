function Modal({ CloseModal }) {
  return (
    <div className=' fixed z-10 pt-40 left-0 top-0 w-full h-full overflow-auto bg-green-500'>
      <div className=' w-4/5 relative bg-slate-100 mx-auto p-0 border border-red-500 text-center rounded-lg overflow-hidden'>
        <div className='bg-indigo-600 text-white'>
          <span
            className='text-3xl cursor-pointer float-right'
            onClick={CloseModal}
          >
            &times;
          </span>
          <h2 className=' text-2xl font-bold '>Header</h2>
        </div>
        <div className=' py-40 text-xl'>
          <p>This is the modal body.</p>
        </div>
        <div className='py-4 bg-blue-700 text-white text-xl'>
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
}

export default Modal;
