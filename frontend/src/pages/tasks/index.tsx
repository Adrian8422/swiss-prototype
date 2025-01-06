import React from "react";
import { ContainerPage,TitleContainer } from "./styled.ts";
import { Header } from "../../components/header/index.tsx";
import TaskList from "../../components/taskList/taskListComp.tsx";
import { Title } from "../../ui/texts/index.ts";

export default function TasksPage() {
  return (
    <ContainerPage>
      <Header />
      <TitleContainer>
        <Title>All Tasks</Title>
      </TitleContainer>
      <TaskList />
    </ContainerPage>
  );
}
