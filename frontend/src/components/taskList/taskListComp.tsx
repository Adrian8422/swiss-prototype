import React from "react";
import { useState } from "react";
import TaskItem from "../taskItem/taskItem.tsx";
import { TaskListContainer } from "./styled.ts";
import { useNavigate } from "react-router-dom";
import { useGetAllTasks } from "../../lib/hooks.ts";

const TaskList: React.FC = () => {
  const tasks = useGetAllTasks();
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState("");

  const handleChange = (e: any) => {
    setCategorie(e.target.value);
  };

  const filteredTasks = categorie
    ? tasks.data?.filter((task: any) => task.status === categorie)
    : tasks.data;

  if (tasks.error) {
    navigate("/login");
    return <p>Error</p>;
  }
  if (tasks.isLoading) return <p>Loading...</p>;
  if (!tasks.data[0]) return <p>You have not yet created tasks...</p>;

  console.log(tasks);

  return (
    <div>
      <select
        onChange={handleChange}
        name="status"
        id="status"
        value={categorie}
      >
        <option value="">All</option>
        <option value="pendiente">Pending</option>
        <option value="en progreso">In process</option>
        <option value="completada">Done</option>
      </select>

      <TaskListContainer>
        {filteredTasks?.map((task: any) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </TaskListContainer>
    </div>
  );
};

export default TaskList;
