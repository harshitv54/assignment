import React from "react";

const Introduction = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-5xl sm:text-3xl font-semibold uppercase">
      Show visitors what <br/>they're signing up for
      </p>
      <p className="text-3xl lg:text-xl sm:text-xl font-medium text-gray-500  mt-3">
      Include a video or photo from one of your sessions to help <br/> people understand your service (or just to hype ‘em up).
      </p>

      {/*EMBEDING YT VIDEO */}

      <div className="flex w-9/12 bg-[#f3f7c0] rounded-3xl mt-20 lg:ml-[11rem] sm:ml-[5rem] lg:py-[10rem] lg:px-[10rem] sm:px-10 sm:py-11 justify-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/saXOqhGfFQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-[2rem]" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Introduction;
