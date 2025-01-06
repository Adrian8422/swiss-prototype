import React from "react";
import { TitleContainer } from "./styled.ts";
import { Header } from "../../../components/header/index.tsx";
import TaskForm from "../../../components/formCreateTask/formTask.tsx";
import { Title } from "../../../ui/texts/index.ts";

const TaskPage = () => {
  return (
    <div>
      <Header />
      <TitleContainer>
        <Title>Create Task</Title>
      </TitleContainer>
      <TaskForm />
    </div>
  );
};

export default TaskPage;
