import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto bg-[#cafff3] rounded-[5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/work1.jpg" alt="w1" className="rounded-[2.5rem]"/>
          <p className="text-2xl font-semibold">Feature 1</p>
            <p className="text-gray-500">
            Talk about some of the details of your offer with <br/> a focus on the value people get back.
          </p>
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/work2.jpg" alt="w2" className="rounded-[2.5rem]" />
          <p className="text-2xl font-semibold">Feature 2</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
            Is there a pain point that your service resolves? <br/> Tell visitors about it here.
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/work3.jpg" alt="w3" className="rounded-[2.5rem]" />
          <p className="text-2xl font-semibold">Feature 3</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
            Alternatively, you could use this section to address <br/> some frequently asked questions.
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Features;
