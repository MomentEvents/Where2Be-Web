// utils/showErrorMessage.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorMessage from './ErrorMessage';

const showErrorMessage = (message) => {
  const el = document.createElement('div');
  document.body.appendChild(el);

  // Use createRoot API
  const root = ReactDOM.createRoot(el);
  root.render(<ErrorMessage message={message} />);

  setTimeout(() => {
    root.unmount(); // Unmount the component
    document.body.removeChild(el);
  }, 4000);
};

export default showErrorMessage;
