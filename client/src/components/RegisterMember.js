// src/components/RegisterMember.js

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const RegisterMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [membershipType, setMembershipType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password,
          membershipType,
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <FormContainer>
      <h2>Register New Member</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
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
        <label>
          Membership Type:
          <select
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
    </FormContainer>
  );
};

export default RegisterMember;

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
  select,
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
