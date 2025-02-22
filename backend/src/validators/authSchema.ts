import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required").max(50, "Name is too long"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required"),
});
