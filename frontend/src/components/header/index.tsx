import React from "react";
import { FiPlusCircle, FiList } from "react-icons/fi";
import { HeaderContainer, Logo, Nav, NavButton } from "./styled.ts";
import { useNavigate } from "react-router-dom";

export function Header() {
  const router = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("tk");
    window.localStorage.removeItem("isAuthenticated");
    alert("Closed session");

    setTimeout(() => {
      router("/login");
    }, 1000);
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => router("/")}>Task Manager</Logo>
      <Nav>
        <NavButton onClick={() => router("/tasks/create")}>
          <FiPlusCircle size={20} />
          Create Task
        </NavButton>
        <NavButton onClick={() => router("/tasks")}>
          <FiList size={20} />
          View Tasks
        </NavButton>
        <NavButton onClick={handleLogout}>Log out</NavButton>
      </Nav>
    </HeaderContainer>
  );
}
