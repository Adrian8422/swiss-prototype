import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  color: #333;
  font-family: "Inter", sans-serif;
  padding: 2rem;
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #34495e;
  line-height: 1.6;
  margin-top: 1rem;
  animation: ${fadeIn} 0.8s ease-out 0.3s forwards;
  opacity: 0;
`;

export const Highlight = styled.span`
  color: #3498db;
  font-weight: 600;
`;
