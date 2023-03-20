import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function AddToast() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnHover
    />
  );
}
