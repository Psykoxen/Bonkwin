import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Account from "../pages/Account/account";
import Login from "../pages/Account/Login/login";
import Register from "../pages/Account/Register/register";
import Ad from "../pages/Ad/ad";
import Create from "../pages/Ad/Create/create";
import Yours from "../pages/Ad/Yours/yours";
import Detail from "../pages/Ad/Detail/detail";
import "./router.css";
function AppRouter() {
  return (
    <BrowserRouter>
      <div className={"sidebar"}>
        <h2>Rainbowkoin</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/account"}>Account</NavLink>
        <NavLink to={"/ad"}>Ads</NavLink>
        <NavLink to={"/ad/yours"}>Your Ads</NavLink>
        <NavLink to={"/ad/create"}>Sell</NavLink>
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/account/register"} element={<Register />} />
        <Route path={"/account/login"} element={<Login />} />
        <Route path={"/ad"} element={<Ad />} />
        <Route path={"/ad/:id"} element={<Detail />} />
        <Route path={"/ad/yours"} element={<Yours />} />
        <Route path={"/ad/create"} element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
