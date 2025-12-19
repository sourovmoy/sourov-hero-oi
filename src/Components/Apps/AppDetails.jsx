import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Container from "../Container";
import { Download, Star } from "lucide-react";
import img from "../../images/icon-review.png";
import { addApps, getApps } from "../../Functions/localStorage";
import { toast } from "react-toastify";
import Rechart from "./Rechart";
import Loader from "../Loader";
import AppErrors from "../Error/AppErrors";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";

const AppDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { data: app = {}, isLoading: loading } = useQuery({
    queryKey: ["app", id],
    queryFn: async () => {
      const res = await axios.get(`/app/${id}`);
      return res.data.results;
    },
  });

  const [state, setState] = useState(false);

  useEffect(() => {
    const installedApps = getApps();
    if (installedApps.some((app) => String(app._id) === id)) {
      setState(true);
    }
  }, [id]);

  const handelInstall = (statement, app) => {
    addApps(app);
    setState(statement);
    if (state) {
      return;
    } else {
      toast("Installing");
    }
  };

  if (loading) return <Loader></Loader>;
  if (Object.keys(app).length === 0) {
    return <AppErrors></AppErrors>;
  }

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
  } = app;

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
              Developed by
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
              onClick={() => handelInstall(true, app)}
              className={
                state
                  ? "btn bg-gradient-to-l from-[#632ee3] to-[#9f62f2] hover:scale-105 text-white opacity-40"
                  : "btn bg-gradient-to-l from-[#632ee3] to-[#9f62f2] hover:scale-105 text-white"
              }
            >
              {state ? "Installed" : "Install Now"} (<span>{size} MB</span>)
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Rating</h2>
          <div className=" ">
            <Rechart ratings={ratings}></Rechart>
          </div>
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
