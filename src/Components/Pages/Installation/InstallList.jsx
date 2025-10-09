import { Download, Star } from "lucide-react";
import React from "react";

const InstallList = ({ app, handelRemove }) => {
  return (
    <div className="bg-white sm:flex justify-between items-center px-4 py-3 sm:py-0">
      <div className="flex justify-between sm:justify-normal items-center gap-3">
        <div className=" w-20 h-20  p-1">
          <img src={app.image} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-medium text-center sm:text-start">
            {app.title}
          </h2>
          <div className="flex gap-5 sm:gap-20 items-center my-2">
            <div className="flex text-green-600 text-md">
              <Download className="" />
              <p className="">{app.downloads}</p>
            </div>
            <div className="flex text-[#FF8811] text-md">
              <Star className="" />
              <p className="">{app.ratingAvg}</p>
            </div>
            <div>
              <p className="text-[#627382] text-md">{app.size} M</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => handelRemove(app.id)}
        className="btn bg-gradient-to-l from-[#632ee3] to-[#9f62f2] hover:scale-105 text-white w-full sm:w-fit my-4 sm:my-0"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallList;
