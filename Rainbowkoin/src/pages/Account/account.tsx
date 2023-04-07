import { NavLink } from "react-router-dom";
import "./account.css";
function Account() {
  return (
    <div className="account">
      <h1>Account</h1>
      <NavLink to={"register"}>Register</NavLink>
      <NavLink to={"login"}>Login</NavLink>
    </div>
  );
}

export default Account;
