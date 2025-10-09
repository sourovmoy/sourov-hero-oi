import React, { useState } from "react";
import { Link, useParams } from "react-router";
import useApps from "../../Functions/useApps";
import Container from "../Container";
import { Download, Star } from "lucide-react";
import img from "../../images/icon-review.png";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { addApps } from "../../Functions/localStorage";

const AppDetails = () => {
  const [state, setState] = useState(false);

  const handelInstall = (statement, id) => {
    if (state === true) {
      alert("Already Installed");
      return;
    }
    addApps(id);
    setState(statement);
  };

  const { id } = useParams();
  const { apps, loading } = useApps();
  const selectedApp = apps.find((app) => String(app.id) == id);
  if (loading) return <p className="text-center">Loading...</p>;
  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    ratings,
    size,
    reviews,
  } = selectedApp;

  const review = reviews / 1000000;

  return (
    <div>
      <Container>
        <div className="sm:flex p-4 border-b-1 pb-10 border-[#627382]">
          <div className="sm:w-[20vw] mx-20">
            <img className="rounded-2xl" src={image} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="border-b-1 pb-10 text-[#627382]">
              Developed by{" "}
              <span className="text-[#632ee3] font-semibold">
                {companyName}
              </span>
            </p>
            <div className="flex gap-5 sm:gap-20 items-center my-4">
              <div>
                <Download className="text-green-600" />
                <p className="text-[#627382] text-sm font-semibold my-2">
                  Downloads
                </p>
                <p className="font-bold text-2xl">{downloads}</p>
              </div>
              <div>
                <Star className="text-[#FF8811]" />
                <p className="text-[#627382] text-sm font-semibold my-2">
                  Average Ratings
                </p>
                <p className="font-bold text-2xl">{ratingAvg}</p>
              </div>
              <div>
                <img className="w-8" src={img} alt="" />
                <p className="text-[#627382] text-sm font-semibold my-2">
                  Total Reviews
                </p>
                <p className="font-bold text-2xl">{review} M</p>
              </div>
            </div>
            <button
              disabled={state}
              onClick={() => handelInstall(true, selectedApp)}
              className={
                state
                  ? "btn bg-gradient-to-l from-[#632ee3] to-[#9f62f2] hover:scale-105 text-white opacity-40"
                  : "btn bg-gradient-to-l from-[#632ee3] to-[#9f62f2] hover:scale-105 text-white"
              }
            >
              Install Now (<span>{size} MB</span>)
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Rating</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width="150" height="40" data={ratings}>
              <XAxis />
              <YAxis dataKey="name" />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="my-10 border-t-1 border-[#627382]">
          <h2 className="text-2xl font-semibold mb-5">Description</h2>
          <h2>{description}</h2>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
