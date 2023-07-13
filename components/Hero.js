import React from "react";
import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#fcf2e8] px-6 lg:px-16 py-10 rounded-3xl">
        <Logo />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 sm:py-10">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              Describe the <br className="lg:flex hidden"/> value of booking <br className="lg:flex hidden" /> an appointment
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              No need to get clever. Tell people excatly what <br  className="lg:flex hidden"/> you're offering, then use this space to communicate <br className="lg:flex hidden" /> your key value proposition.
            </p>
          </div>
          <img className="rounded-3xl" src="/assets/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
