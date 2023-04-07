import "./login.css";
import React, { useEffect, useState } from "react";

function Login() {
  const [data, setData] = useState(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    const email = target.email.value;

    fetch(`http://localhost:8080/api/user`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        if (data != null) {
          data.forEach((element: { id: number; name: string }) => {
            if (element.name == email) {
              sessionStorage.setItem("userid", element.id.toString());
              sessionStorage.setItem("email", email);
              window.location.href = "/account";
            }
          });
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="form-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
