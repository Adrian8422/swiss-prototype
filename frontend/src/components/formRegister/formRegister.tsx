import React from "react";
import { useState } from "react";
import { Button, FormContainer, FormField, Input, LinkText } from "./styled.ts";
import { register } from "../../lib/api.ts";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register({ name, email, password });
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <h2>Signun</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Button type="submit">Signup</Button>
          <LinkText>
            Already registered?<a href="/login"> Click here</a>
          </LinkText>
        </FormField>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
