import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ShowApps = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="text-center shadow-lg p-2 rounded-md bg-white hover:scale-105"
    >
      <h1>name</h1>
      <img className="p-2 h-52 mx-auto" src={app.image} alt="" />
      <h3 className="font-semibold text-xl mb-8">{app.title}</h3>
      <div className="flex justify-between items-center my-2 px-3 ">
        <div className="bg-[#F1F5E8] px-2 py-1 rounded-md">
          <p className="text-[#00D390] font-semibold text-sm flex gap-1 items-center">
            <Download className="w-4" /> {app.downloads}
          </p>
        </div>
        <div className="bg-[#FFF0E1] px-2 py-1 rounded-md">
          <p className="text-[#FF8811] font-semibold text-sm flex gap-1 items-center">
            <Star className="w-4" /> {app.ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ShowApps;
