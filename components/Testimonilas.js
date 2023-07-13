import React from "react";
import Stars from "./Stars";

const Testimonilas = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-800 text-3xl lg:text-5xl font-semibold capitalize">
      DON'T JUST TAKE OUR WORD FOR IT
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/t1.svg" alt="" className="lg:ml-20"/>
        <div className="flex flex-col gap-5 items-start mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Martin Watson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">United Kingdom</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
          Share a real testimonial that <br/> hits some of your benefits <br/> (but isn't too sales-y).
          </p>
          <Stars/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/t2.svg" alt="" className="lg:ml-20"/>
        <div className="flex flex-col gap-5 items-start mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Emmilia Hartwood</p>
          <div className="flex items-center gap-2">
            <img src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">Spain</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
          Share a real testimonial that <br/> hits some of your benefits <br/> (but isn't too sales-y).
          </p>
          <Stars/>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonilas;
