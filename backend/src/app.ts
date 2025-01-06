import express, { Request, Response } from "express";
import "dotenv/config";
import { loginUser, registerUser } from "./controllers/auth";
import { middlewareAuth } from "./middlewares/authMiddleware";
import {
  allTasks,
  createTask,
  deleteTask,
  updateTask,
  getTaskById,
} from "./controllers/tasks";
import cors from "cors";
import { loginSchema, registerSchema } from "./validators/authSchema";
import { taskSchema } from "./validators/taskSchema";

const app = express();

app.use(express.json());

app.use(cors({
  origin:["https://swiss-prototype-frontend.onrender.com"]
}));

app.post(
  "/auth/register",
  async (req: Request, res: Response): Promise<void> => {
    try {
      await registerSchema.validate(req.body, { abortEarly: false });

      const { name, email, password } = req.body;

      const response = await registerUser({ name, email, password });
      res.status(201).send(response);
    } catch (error: any) {
      console.error("Error in /auth/register:", error.message);

      if (error.name === "ValidationError") {
        const errorDetails = error.errors?.join(", ");
        res.status(400).json({
          status: "error",
          message: `Validation error: ${errorDetails}`,
        });
      } else if (error.name === "SequelizeUniqueConstraintError") {
        const details = error.errors?.map((err: any) => ({
          field: err.path,
          message: err.message,
        }));

        res.status(400).json({
          status: "error",
          message: `Validation error: ${details
            ?.map((detail: any) => `${detail.field}: ${detail.message}`)
            .join(", ")}`,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          details: error.message,
        });
      }
    }
  }
);

app.post("/auth/login", async (req: Request, res: Response): Promise<void> => {
  try {
    await loginSchema.validate(req.body, { abortEarly: false });

    const { email, password } = req.body;

    const response = await loginUser({ email, password });

    res.status(200).send(response);
  } catch (error: any) {
    console.error("Error in /auth/login:", error.message);

    if (error.name === "ValidationError") {
      const errorDetails = error.errors?.join(", ");
      res.status(400).json({
        status: "error",
        message: `Validation error: ${errorDetails}`,
      });
    } else if (error.message.includes("User not found")) {
      res.status(404).json({
        status: "error",
        message: "User not found",
      });
    } else if (error.message.includes("Password incorrect")) {
      res.status(401).json({
        status: "error",
        message: "Password incorrect",
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        details: error.message,
      });
    }
  }
});
app.get("/tasks", middlewareAuth, async (req: Request | any, res: Response) => {
  const { user } = req;
  try {
    const response = await allTasks(user.id);
    res.send(response);
  } catch (error: any) {
    res.status(403).send({ message: error.message });
  }
});
app.get(
  "/tasks/:id",
  middlewareAuth,
  async (req: Request | any, res: Response) => {
    const { user } = req;
    const taskId = req.params.id;
    try {
      const response = await getTaskById(user.id, taskId);
      res.send(response);
    } catch (error: any) {
      res.status(403).send({ message: error.message });
    }
  }
);

app.post("/tasks", middlewareAuth, async (req: Request | any, res: Response) => {
  const { id } = req.user;
  try {
    await taskSchema.validate(req.body, { abortEarly: false });

    const { title, description, status } = req.body;

    const response = await createTask(id, { title, description, status });
    res.send(response);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      const errorDetails = error.errors?.join(", ");
      res.status(400).json({
        status: "error",
        message: `Validation error: ${errorDetails}`,
      });
    } else if (error.message === "We need to receive the data to create task") {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        details: error.message,
      });
    }
  }
});

app.patch(
  "/tasks/:id",
  middlewareAuth,
  async (req: Request | any, res: Response) => {
    try {
      const idTask = req.params.id;
      const { id } = req.user;
      const { title, description, status } = req.body;

      const response = await updateTask(id, idTask, {
        title,
        description,
        status,
      });
      res.send(response);
    } catch (error: any) {
      if (error.message == "Invalid UUID format for idTask")
        res.status(403).send({ message: error.message });
      else if (error.message == "We did not find the task")
        res.status(404).send({ message: error.message });
      else {
        res.status(500).send({ message: error.message });
      }
    }
  }
);

app.delete(
  "/tasks/:id",
  middlewareAuth,
  async (req: Request | any, res: Response) => {
    const idTask = req.params.id;
    const { id } = req.user;
    try {
      const response = await deleteTask(id, idTask);
      res.send(response);
    } catch (error: any) {
      if (error.message == "We did not find the task")
        res.status(404).send({ message: error.message });
      else res.status(500).send({ message: error.message });
    }
  }
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
