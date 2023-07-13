import React from "react";

const About = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <div className="flex flex-col gap-5 items-start">
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-xl">ABOUT</p>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Some more information <br/> about your business</p>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
          Share a little about yourself as a business owner, <br/> or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.
          </p>
        </div>
        <img src="/assets/about.jpg" alt="" className="rounded-[2rem]"/>
      </div>
    </div>
  );
};

export default About;