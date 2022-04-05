import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";

const Layout = () => {
  const { pathname } = useLocation();

  const str = pathname.split("/");
  const string = "bg" + str[1];

  return (
    <div className={string}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
