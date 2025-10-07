import React from "react";
import img1 from "../../images/logo.png";
import img2 from "../../images/Group (1).png";
import img3 from "../../images/Group (2).png";
import img4 from "../../images/fi_5968764.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="flex justify-between items-center h-40 px-10 md:px-20">
        <div className="flex">
          <img className="w-5" src={img1} alt="" />
          <p className="font-semibold">HERO.IO</p>
        </div>
        <div>
          <p className="mb-5">Social Links</p>
          <div className="flex gap-4">
            <a href="">
              <img src={img2} alt="" />
            </a>
            <a href="">
              <img src={img3} alt="" />
            </a>
            <a href="">
              <img src={img4} alt="" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm border-t-2 border-gray-600 mx-4 md:mx-12 pt-8">
        Copyright © 2025 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
