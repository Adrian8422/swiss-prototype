import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineSync,
  AiOutlineClockCircle,
} from "react-icons/ai";
import {
  DeleteIcon,
  TaskContainer,
  TaskDescription,
  TaskStatus,
  TaskTitle,
  ContainerForm,
  CustomSelect,
  SubmitButton,
  CustomInput,
  CustomTextArea,
  ContainerButtonAndTrash,
  ContainerInputs,
} from "./styled.ts";

import { deleteTask, updateTask } from "../../lib/api.ts";
import { useGetAllTasks } from "../../lib/hooks.ts";

const TaskItem = ({ task }: any) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const { refreshTasks } = useGetAllTasks();
  const taskRef = useRef<HTMLDivElement>(null);

  const isEditing = () => setEdit((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (taskRef.current && !taskRef.current.contains(event.target as Node)) {
      setEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateTask(task.id, { title, description, status });
    await refreshTasks();
    setEdit(false);
    alert("Task successfully modified");
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    await refreshTasks();
    setEdit(false);
    alert("Task deleted");
  };

  return (
    <TaskContainer
      ref={taskRef}
      onClick={edit ? undefined : isEditing}
      key={task.id}
    >
      {!edit ? (
        <>
          <div>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
          </div>
          <TaskStatus status={task.status}>
            {task.status === "completada" ? (
              <>
                <AiOutlineCheck /> Done
              </>
            ) : task.status === "en progreso" ? (
              <>
                <AiOutlineSync /> In Process
              </>
            ) : (
              <>
                <AiOutlineClockCircle /> Pending
              </>
            )}
          </TaskStatus>
        </>
      ) : (
        <ContainerForm>
          <form onSubmit={handleSubmit}>
            <ContainerInputs>
              <CustomInput
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Task title"
              />

              <CustomTextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Task description"
              />

              <CustomSelect
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pendiente">Pending</option>
                <option value="en progreso">In process</option>
                <option value="completada">Done</option>
              </CustomSelect>
            </ContainerInputs>
            <ContainerButtonAndTrash>
              <SubmitButton type="submit">Save</SubmitButton>
              <DeleteIcon onClick={handleDelete}>
                <AiOutlineDelete />
              </DeleteIcon>
            </ContainerButtonAndTrash>
          </form>
        </ContainerForm>
      )}
    </TaskContainer>
  );
};

export default TaskItem;

// Agregar a cada AiOutlineCheck
// style={{ marginRight: "0.5rem" }}
// style={{ marginRight: "0.5rem" }}
// style={{ marginRight: "0.5rem" }}
