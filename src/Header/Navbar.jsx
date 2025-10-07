import React from "react";
import img from "../images/logo.png";
import { NavLink } from "react-router";
import { Github } from "lucide-react";

const Navbar = ({ links }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <NavLink className="font-semibold" key={link.id} to={link.links}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <span className="flex items-center">
          <img className="w-8" src={img} alt="" />
          <p className="font-bold text-xl">HERO.IO</p>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {links.map((link) => (
            <NavLink className="font-semibold" key={link.id} to={link.links}>
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-l from-[#632ee3] to-[#9f62f2] hover:scale-105">
          <Github className="p-0.5 "></Github>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
