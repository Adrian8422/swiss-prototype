import React, { useState } from "react";
import {
  Button,
  FormContainer,
  Input,
  Label,
  LabelContainer,
  Select,
  Textarea,
} from "./styled.ts";
import { createTask } from "../../lib/api.ts";
import { useGetAllTasks } from "../../lib/hooks.ts";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("en progreso");
  const { refreshTasks } = useGetAllTasks();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if(!title) alert('Title is required')
      await createTask({ title, description, status });
      await refreshTasks();
      alert("Task successfully created");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <LabelContainer>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </LabelContainer>
        <LabelContainer>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </LabelContainer>
        <LabelContainer>
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pendiente">Pending</option>
            <option value="en progreso">In process</option>
            <option value="completada">Done</option>
          </Select>
        </LabelContainer>
        <Button type="submit">Create Task</Button>
      </form>
    </FormContainer>
  );
};

export default TaskForm;
