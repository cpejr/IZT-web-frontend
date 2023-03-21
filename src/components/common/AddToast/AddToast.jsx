import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function AddToast() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      font-size="14px"
      theme="light"
    />
  );
}
