import styled from "styled-components";

interface TaskStatusProps {
  status: "pendiente" | "en progreso" | "completada";
}

export const TaskContainer = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #2e2e3c;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a3a4d;
  }
`;

export const TaskTitle = styled.h3`
  font-family: "Inter", sans-serif;
  width: 100%;
  margin: 0;
  font-size: 18px;
  color: #ffffff;
`;
export const ContainerInputs = styled.h3`
  display: flex;
  flex-direction: column;
`;

export const TaskDescription = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #dddddd;
`;

export const TaskStatus = styled.span<TaskStatusProps>`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => {
    if (props.status === "completada") return "#4caf50";
    if (props.status === "en progreso") return "#ff9800";
    return "#f44336";
  }};
  display: flex;
  align-items: center;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DeleteIcon = styled.div`
  color: #ff4d4f;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #d9363e;
  }
`;

export const CustomSelect = styled.select`
  width: 100%;
  padding: 0.4rem;
  font-size: 14px;
  color: #333;
  background-color: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 4px;
  appearance: none;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"%3E%3Cpath fill="none" stroke="%23333" stroke-width="22" d="M112 184l64 64 64-64" /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #7f5af0;
    outline: none;
    box-shadow: 0 0 8px rgba(127, 90, 240, 0.2);
  }
`;
export const CustomInput = styled.input`
  margin-bottom: 4px;

  padding: 0.4rem;
  font-size: 15px;
  color: #333;
  background-color: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 4px;
  appearance: none;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"%3E%3Cpath fill="none" stroke="%23333" stroke-width="22" d="M112 184l64 64 64-64" /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #7f5af0;
    outline: none;
    box-shadow: 0 0 8px rgba(127, 90, 240, 0.2);
  }
`;

export const CustomTextArea = styled.textarea`
  margin-bottom: 4px;

  padding: 0.4rem;
  font-size: 13px;
  color: #333;
  background-color: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 4px;
  appearance: none;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"%3E%3Cpath fill="none" stroke="%23333" stroke-width="22" d="M112 184l64 64 64-64" /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  resize: vertical;

  &:focus {
    border-color: #7f5af0;
    outline: none;
    box-shadow: 0 0 8px rgba(127, 90, 240, 0.2);
  }
`;

export const ContainerButtonAndTrash = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 3px 0 3px;
`;

export const SubmitButton = styled.button`
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
