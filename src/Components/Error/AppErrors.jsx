import React from "react";
import img from "../../images/App-Error.png";
import { Link } from "react-router";

const AppErrors = () => {
  return (
    <div className="h-[80vh] mt-20">
      <img className="mx-auto" src={img} alt="" />
      <h1 className="text-center text-4xl font-medium">OPPS!! APP NOT FOUND</h1>
      <p className="text-center my-5">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <div className="flex justify-center">
        <Link
          to="/"
          className="btn bg-gradient-to-l  from-[#632ee3] to-[#9f62f2] hover:scale-105 text-white"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default AppErrors;
