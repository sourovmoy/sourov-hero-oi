import React from "react";
import Container from "../../Container";
import img1 from "../../../images/Group (3).png";
import img2 from "../../../images/Group (4).png";
import img3 from "../../../images/hero.png";

const Home = () => {
  return (
    <div className="my-20">
      <Container>
        <h1 className="font-bold text-3xl md:text-5xl text-center">
          We Build <br /> <span className="text-[#632ee3]">Productive</span>
          Apps
        </h1>
        <p className="text-center w-[75vw] md:w-[60vw] mx-auto my-5 text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-8 py-5">
          <a className="btn hover:scale-105">
            <img className="m-1" src={img1} alt="" /> Google Play
          </a>
          <a className="btn hover:scale-105">
            <img className="bg-blue-600 p-0.5 rounded-md" src={img2} alt="" />{" "}
            App Store
          </a>
        </div>
        <img className="flex mx-auto pt-10" src={img3} alt="" />
      </Container>
      <div className="bg-gradient-to-l from-[#632ee3] to-[#9f62f2] pt-10 pb-16 text-white rounded-lg md:rounded-0">
        <h3 className="text-center my-10 text-4xl font-semibold">
          Trusted by Millions, Built for You
        </h3>
        <div className="md:flex text-center justify-evenly">
          <div>
            <p className="text-sm pb-2">Total Downloads</p>
            <p className="text-5xl font-bold">29.6M</p>
            <p className="text-sm pt-2">21% more than last month</p>
          </div>
          <div className="my-14 md:my-0">
            <p className="text-sm pb-2">Total Reviews</p>
            <p className="text-5xl font-bold">906K</p>
            <p className="text-sm pt-2">46% more than last month</p>
          </div>
          <div>
            <p className="text-sm pb-2">Active Apps</p>
            <p className="text-5xl font-bold">132+</p>
            <p className="text-sm pt-2">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
