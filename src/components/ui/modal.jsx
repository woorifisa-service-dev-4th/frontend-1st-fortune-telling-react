import React from 'react';

const Modal = ({ children }) => {
  return (
    <>
      <div
        data-cy="modal-backdrop"
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-10 flex items-center justify-center"
      >
        <div
          className="bg-white rounded-lg shadow-2xl w-11/12 max-w-lg p-6 transform transition-transform duration-300 scale-100"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;