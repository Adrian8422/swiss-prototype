import React from "react";
import { useState } from "react";
import {
  FormContainer,
  FormField,
  Input,
  Label,
  SubmitButton,
  LinkText,
} from "./styled.ts";
import { signin } from "../../lib/api.ts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authContext.tsx";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await signin({ email, password });

      if (response.token) {
        window.localStorage.setItem("tk", response.token);
        login();
        navigate("/");
      }
    } catch (error) {
      alert("Data error");
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormField>
        <SubmitButton type="submit">Signin</SubmitButton>
        <LinkText>
          ¿No estás registrado?<a href="/register"> Clická aquí</a>
        </LinkText>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
