import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home.tsx";
import LoginPage from "../pages/login/page.tsx";
import RegisterPage from "../pages/register/page.tsx";
import TasksPage from "../pages/tasks/index.tsx";
import TaskPage from "../pages/tasks/create/page.tsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks/create" element={<TaskPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tasks" element={<TasksPage />} />
    </Routes>
  );
}
