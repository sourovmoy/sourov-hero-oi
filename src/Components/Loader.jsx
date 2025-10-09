import React from "react";
import img from "../images/logo.png";

const Loader = () => {
  return (
    <div className="flex justify-center gap-10 items-center h-100">
      <img className="w-15 animate-spin" src={img} alt="" />
      <h2 className="text-2xl font-semibold">Loading</h2>
    </div>
  );
};

export default Loader;
