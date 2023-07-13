import React from "react";
import {PiMonitorLight} from 'react-icons/pi';
import {BsHeartPulse} from 'react-icons/bs';
import {FaAward} from 'react-icons/fa';

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-[30%_58%] lg:gap-[10rem] py-20 px-20 sm:py-10 sm:px-10 sm:gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col  gap-6">
            <PiMonitorLight className="text-gray-500 text-4xl"/>
            <p className="text-2xl font-semibold ">Benifit 1</p>
            <p className="text-gray-500">
              Highlight the benefits of signing up for <br /> an appointment, online class, <br /> or video consultation.
            </p>
          </div>
          <div className="flex flex-col  gap-6">
            <BsHeartPulse className="text-gray-500 text-4xl"/>
            <p className="text-2xl font-semibold ">Benifit 2</p>
            <p className="text-gray-500">
            For example, fitness instructors might <br /> describe how their routines make people <br /> healthier *and* happier.
            </p>
          </div>
          <div className="flex flex-col  gap-6">
            <FaAward className="text-gray-500 text-4xl"/>
            <p className="text-2xl font-semibold ">Benifit 3</p>
            <p className="text-gray-500">
            Remind visitors how easy it is to claim <br /> your offer and start enjoying the benefits.
            </p>
          </div>
        </div>

        {/*END OF BENIFITS*/}

        {/*START OF FORM*/}

        <div className="bg-[#a2ccf0] flex flex-col rounded-[2rem] gap-6 justify-center sm:w-4/5 sm:mx-auto sm:my-0 sm:px-5">
          <div className="mx-auto my-0">
            <h1 className="text-3xl font-bold lg:text-3xl sm:text-2xl mb-4 justify-center">Schedule an Appointment</h1>
            <h2 className="text-xl lg:text-xl sm:text-lg mb-2">Here, let visitors know what will happen <br /> when they complete your form.
            </h2>
            <form className="flex flex-col gap-[1.2rem]">
              <input type="text" name="fname" placeholder="First Name*" className="w-full  resize-none p-3 rounded-lg border-[1.8px] border-solid; border-black bg-[#374a5a] placeholder-gray text-white" required />
              <input type="text" name="lname" placeholder="Last Name*" className="w-full  resize-none p-3 rounded-lg border-[1.8px] border-solid; border-black bg-[#374a5a] placeholder-gray text-white" required  />
              <input type="email" name="email" placeholder="Email*" className="w-full  resize-none p-3 rounded-lg border-[1.8px] border-solid; border-black bg-[#374a5a] placeholder-gray text-white" required  />
              <input type="number" name="pnumber" placeholder="Enter phone number*" className="w-full  resize-none p-3 rounded-lg border-[1.8px] border-solid; border-black bg-[#374a5a] placeholder-gray text-white [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" required />
              <select name="appointment" className="w-full  resize-none p-3 rounded-lg border-[1.8px] border-black bg-[#374a5a] placeholder-gray text-white">
                <option value="" className="text-white" disabled selected >Type of Appointment</option>
                <option value="appointment_1" className="text-white">Appointment 1</option>
                <option value="appointment_2" className="text-white">Appointment 2</option>
                <option value="appointment_3" className="text-white">Appointment 3</option>
              </select>
              <button type="submit" className="w-max inline-block text-white cursor-pointer text-bold bg-[#389cef] transition-[] px-[1.2rem] py-3 rounded-[0.4rem] border-solid; hover:bg-[#428dca]">Schedule Now</button>
            </form>
          </div>

          {/*END OF FORM*/}

        </div>
      </div>
    </div>
  );
};

export default Values;
