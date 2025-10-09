import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      links: "/",
    },
    {
      id: 2,
      name: "Apps",
      links: "/app",
    },
    {
      id: 3,
      name: "Installation",
      links: "/installation",
    },
  ];
  return (
    <div className="mx-2 md:mx-0 bg-[#F1F5E8]">
      <Navbar links={links}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
