import React from "react";
import img from "../images/logo.png";

const Loader = () => {
  return (
    <div className="flex justify-center gap-10 items-center h-100">
      <h2 className="text-5xl font-bold flex items-center">
        L <img className="w-15 animate-spin mx-3" src={img} alt="" />
        ading
      </h2>
    </div>
  );
};

export default Loader;
