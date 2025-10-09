import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="h-[80vh] mt-40">
      <h1 className="text-center text-6xl font-bold">404</h1>
      <h1 className="text-center text-4xl font-medium">
        OPPS!! {error.massage} Page NOT FOUND
      </h1>
      <p className="text-center my-5">
        The Page you are requesting is not found on our system.
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

export default ErrorPage;
