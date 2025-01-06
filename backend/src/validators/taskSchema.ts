import * as yup from "yup";


export const taskSchema = yup.object().shape({
    title: yup.string().required("Title is required").max(100, "Title is too long"),
    description: yup.string().optional().max(255, "Description is too long"),
    status: yup.string().required("Status is required"),
  });
  