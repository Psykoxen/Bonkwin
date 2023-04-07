import "./register.css";
import React, { useEffect, useState } from "react";

function Register() {
  const [data, setData] = useState(null);
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    const email = target.email.value;
    fetch(`http://localhost:8080/api/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }).catch((error) => console.log(error));
  }

  return (
    <div className="form-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
