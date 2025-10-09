import React, { useState } from "react";
import Container from "../Container";
import useApps from "../../Functions/useApps";
import ShowApps from "./ShowApps";
import Loader from "../Loader";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const trim = search.trim().toLocaleLowerCase();
  const searchApps = trim
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(trim))
    : apps;

  return (
    <Container>
      <div className="my-10">
        <h3 className="text-center font-bold text-4xl py-8">
          Our All Applications
        </h3>
        <p className="text-center text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="sm:flex justify-between items-center m-10">
          <h4 className="font-semibold text-center py-5 sm:py-0 text-xl">
            (<span>{searchApps.length}</span>) Apps Found
          </h4>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {searchApps.length === 0 ? (
            <h2 className="text-center text-4xl font-medium">No Data Found</h2>
          ) : (
            searchApps.map((app) => (
              <ShowApps key={app.id} app={app}></ShowApps>
            ))
          )}
        </div>
      )}
    </Container>
  );
};

export default Apps;
