import React from "react";
import Image from "next/image";
import { bannerImg } from "../../../utility/links";

const Banner = () => {
  return (
    <div
      id="banner"
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
    >
      <Image
        src={bannerImg}
        layout="fill"
        alt="Banner Image"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          type="submit"
          className="text-purple-500 px-10 py-4 bg-white shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          i'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
