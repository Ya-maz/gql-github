import { Outlet } from "react-router-dom";

import { Theme } from "./components";

import "./Layout.css";

export const Layout = () => (
  <div className="App">
    <header className="layout">
      <h4>Repo Explorer</h4>
      <Theme />
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);
