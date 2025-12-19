import React, { useState } from "react";
import Container from "../Container";
import ShowApps from "./ShowApps";
import Loader from "../Loader";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
const Apps = () => {
  const axios = useAxios();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState({ search: "" });
  const [sort, setSort] = useState({ sort: "" });
  const limit = 12;
  const { data: apps = [], isLoading: loading } = useQuery({
    queryKey: ["apps", search, page, sort],
    queryFn: async () => {
      const skip = page * limit;
      const res = await axios.get("/apps", {
        params: {
          limit,
          skip,
          search,
          sort,
        },
      });

      return res.data;
    },
    keepPreviousData: true,
  });
  const { results, appsCount } = apps;
  const totalPages = Math.ceil(appsCount / limit);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
    setPage(0);
    e.target.reset();
  };

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
            (<span>{appsCount}</span>) Apps Found
          </h4>
          <form onSubmit={handleSearch}>
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
                type="text"
                name="search"
                required
                placeholder="Search Apps"
              />
              <button type="submit">
                <FaSearch />
              </button>
            </label>
          </form>
          <div>
            <select
              className="select select-bordered"
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }}
            >
              <option value="">Sort</option>
              <option value="rating-desc">Ratings : High to Low</option>
              <option value="rating-asc">Ratings : Low to High</option>
              <option value="download-asc">DownLoads : High to Low</option>
              <option value="download-desc">DownLoads : Low to High</option>
            </select>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {results.length === 0 ? (
            <h2 className="text-center text-4xl font-medium">No Data Found</h2>
          ) : (
            results.map((app) => <ShowApps key={app.id} app={app}></ShowApps>)
          )}
        </div>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 my-10 flex-wrap">
          <button
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages).keys()].map((i) => (
            <button
              onClick={() => setPage(i)}
              className={`px-4 py-2 rounded ${
                page === i ? "bg-purple-500 text-white" : "bg-gray-200"
              }`}
              key={i}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </Container>
  );
};

export default Apps;
