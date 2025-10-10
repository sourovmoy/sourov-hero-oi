import React, { useEffect, useState } from "react";
import { getApps, removeApps } from "../../../Functions/localStorage";
import Container from "../../Container";
import InstallList from "./InstallList";
import useApps from "../../../Functions/useApps";
import Loader from "../../Loader";
import { toast } from "react-toastify";

const Installation = () => {
  const { loading } = useApps();
  const [installedApps, setInstalledApps] = useState([]);
  const [sort, setSort] = useState();

  useEffect(() => {
    const newInstalledApps = getApps();
    if (newInstalledApps) setInstalledApps(newInstalledApps);
  }, []);

  const sortedItem = (() => {
    if (sort === "low-to-high") {
      return [...installedApps].sort((a, b) => a.size - b.size);
    }
    if (sort === "high-to-low") {
      return [...installedApps].sort((a, b) => b.size - a.size);
    } else return installedApps;
  })();

  const handelRemove = (id) => {
    const newApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(newApps);
    removeApps(id);
    toast("UnInstalling");
  };
  return (
    <Container>
      <div className="">
        <h3 className="text-center text-3xl font-bold mt-10">
          Your Installed Apps
        </h3>
        <p className="text-center text-[#627382] my-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">
          App Found (<span>{installedApps.length}</span>)
        </p>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort by Install</option>
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to low</option>
          </select>
        </label>
      </div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="flex flex-col gap-5 rounded-lg my-10">
          {sortedItem.map((app) => (
            <InstallList
              key={app.id}
              handelRemove={handelRemove}
              app={app}
            ></InstallList>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Installation;
