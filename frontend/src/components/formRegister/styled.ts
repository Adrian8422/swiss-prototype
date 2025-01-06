import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  font-family: "Inter", sans-serif;
  flex-direction: column;
  max-width: 380px;
  margin: auto;
  padding: 2rem;
  background-color: #1f1f2e;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  color: #ffffff;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`;

export const Input = styled.input`
  padding: 0.8rem;
  font-size: 0.95rem;
  color: #ffffff;
  background-color: #2a2a3a;
  border: 1px solid #444;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #7f5af0;
  }
`;

export const FormField = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #7f5af0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6a48d6;
  }
`;
export const LinkText = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #a3a3c2;

  a {
    color: #7f5af0;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #6a48d6;
    }
  }
`;
