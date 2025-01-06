import styled from "styled-components";

export const FormContainer = styled.div`
  font-family: "Inter", sans-serif;
  max-width: 420px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2e2e3c;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #e0e0e0;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 18px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2c2c2c;
  color: #e0e0e0;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  padding: 12px;
  margin-bottom: 18px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2c2c2c;
  color: #e0e0e0;
  font-size: 16px;
  resize: vertical;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 18px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2c2c2c;
  color: #e0e0e0;
  font-size: 16px;
`;
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  font-size: 13px;
  color: #fff;
  background-color: #7f5af0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #6a48d6;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #5a3fa0;
  }
`;
