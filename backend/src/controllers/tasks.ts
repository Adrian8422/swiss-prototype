import { Task } from "../models/task";

export const allTasks = async (userId: string) => {
  try {
    return await Task.findAll({ where: { userId } });
  } catch (error) {
    console.log(error);
    return;
  }
};
export const createTask = async (userId: string, data: any) => {
  const { title, description, status } = data;
  try {
    if (!data) throw new Error("We need to receive the data to create task");

    return await Task.create({ userId, title, description, status });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const getTaskById = async (userId: string, taskId: string) => {
  try {
    const task = await Task.findOne({ where: { userId, id: taskId } });
    if (!task) throw new Error("We did not find the task");
    return task;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const updateTask = async (userId: string, idTask: string, data: any) => {
  const { title, description, status } = data;

  const isValidUUID = (id: string) => {
    const regex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return regex.test(id);
  };

  if (!idTask || !isValidUUID(idTask)) {
    throw new Error("Invalid UUID format for idTask");
  }

  try {
    const findTask = await Task.findOne({
      where: { userId, id: idTask },
    });

    if (!findTask) throw new Error("We did not find the task");

    findTask.title = title || findTask.title;
    findTask.description = description || findTask.description;
    findTask.status = status || findTask.status;

    await findTask.save();

    return findTask;
  } catch (error: any) {
    console.error(error);
    throw new Error(
      error.message || "An error occurred while updating the task"
    );
  }
};

export const deleteTask = async (userId: string, idTask: string) => {
  try {
    const findTask = await Task.findOne({
      where: { userId, id: idTask },
    });

    if (!findTask) throw new Error("We did not find the task");

    return await findTask.destroy();
  } catch (error) {}
};
