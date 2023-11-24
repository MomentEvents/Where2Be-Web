import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Message = ({ message, isError, bottomOffset }) => {
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
    bottom: ${(props) => 40 + props.bottomOffset}px;
    right: 40px;
    width: 40%; // Set max width to 40% of the screen size
    padding: 20px 20px 20px 35px;
    background-color: #262626;
    color: white;
    border-radius: 5px;
    animation: ${fadeInOut} 4s forwards;
    z-index: 999;

    @media (max-width: 800px) {
      width: 90%; // When the screen width is 800px or less, set width to 90%
      right: 5%; // Centering the container
      left: 5%; // Centering the container
    }
  `;
  const ProgressMeter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: ${isError ? "#c93e3e" : "#a245ff"};
    animation: ${progressAnimation} 4s linear forwards;
  `;

  const CloseButton = styled.span`
    position: absolute;
    top: 15px;
    left: 15px;
    cursor: pointer;
    font-weight: bold;
  `;

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <ErrorContainer bottomOffset={bottomOffset}>
      <ProgressMeter />
      <CloseButton onClick={() => setIsVisible(false)}>X</CloseButton>
      {message}
    </ErrorContainer>
  );
};

export default Message;
