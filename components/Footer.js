import React from "react";
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f0f4fd] flex flex-col lg:flex-row  lg:justify-between gap-5 py-10 lg:py-20 rounded-3xl">
        <div className="flex flex-col items-center lg:items-start lg:ml-20">
          <Logo />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:mr-20">
          <p className="text-lg font-medium">&copy; 2023 Insert Name Here. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
