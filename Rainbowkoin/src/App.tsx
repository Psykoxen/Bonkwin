import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./router/Router";
function App() {
  useEffect(() => {
    document.title = "Rainbowkoin";
  }, []);
  return <AppRouter />;
}

export default App;
