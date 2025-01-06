import React from "react";
import {
  HomeContainer,
  ContentWrapper,
  Title,
  Message,
  Highlight,
} from "../pages/styled.ts";
import { Header } from "../components/header/index.tsx";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <ContentWrapper>
          <Title>
            Welcome to your <Highlight>Task Manager</Highlight>
          </Title>
          <Message>
            Here you can manage all your tasks in an easy and simple way.
            Create, edit and delete tasks as needed, start now and keep
            everything organized!
          </Message>
        </ContentWrapper>
      </HomeContainer>
    </>
  );
}
