import React, { useContext } from "react";
import authContext from "../context/authContext";

export default function Profile() {

  const { user } = useContext(authContext);

  return (
    <div style={{ marginTop: "60px" }}>
      <h1>Profile</h1>
      <p>User Email: {user.email}</p>
    </div>
  );
}
