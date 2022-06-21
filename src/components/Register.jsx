import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import authContext from "../context/authContext";

export default function Register({ registerUser, loginUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { user, setUser } = useContext(authContext);

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/profile')
  }, [user])

  return (
    <div>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <label htmlFor="username">
        username
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          registerUser({
            email,
            password,
            username,
          });
        }}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          loginUser(
            {
              email,
              password,
              username,
            },
            setUser
          );
        }}
      >
        Login
      </button>
    </div>
  );
}
