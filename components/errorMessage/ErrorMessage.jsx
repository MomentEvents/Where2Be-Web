// components/ErrorMessage.js
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInOut = keyframes`
  0% { opacity: 0; }
  8% { opacity: 1; }
  92% { opacity: 1; }
  100% { opacity: 0; }
`;

const progressAnimation = keyframes`
  from { width: 100%; }
  to { width: 0%; }
`;

const ErrorContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 35%;
  padding: 20px 20px;
  background-color: #262626;
  color: white;
  border-radius: 5px;
  animation: ${fadeInOut} 4s forwards;
  z-index: 999;
`;

const ProgressMeter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #c93e3e;
  animation: ${progressAnimation} 4s linear forwards;
`;

const ErrorMessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <ErrorContainer>
      <ProgressMeter />
      {message}
    </ErrorContainer>
  );
};

export default ErrorMessage;
