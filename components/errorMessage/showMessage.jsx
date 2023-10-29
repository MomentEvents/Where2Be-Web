// utils/showErrorMessage.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './ErrorMessage';

let activeMessages = 0;

const showMessage = (message, isError) => {
  const el = document.createElement('div');
  document.body.appendChild(el);

  // Calculate the bottom offset
  const bottomOffset = 70 * activeMessages; // assuming each message is roughly 70px in height, adjust if needed

  // Use createRoot API
  const root = ReactDOM.createRoot(el);
  root.render(<Message message={message} isError={isError} bottomOffset={bottomOffset} />);

  activeMessages += 1;

  setTimeout(() => {
    root.unmount(); // Unmount the component
    document.body.removeChild(el);
    activeMessages -= 1;
  }, 4000);
};

export default showMessage;