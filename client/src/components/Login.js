// src/components/Login.js

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      alert(`Welcome, ${response.data.user.name}!`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </FormContainer>
  );
};

export default Login;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: #333;
  }

  input,
  button {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    background-color: #61dafb;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #21a1f1;
  }
`;
