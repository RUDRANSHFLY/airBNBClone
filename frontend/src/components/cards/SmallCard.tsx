import React from "react";
import Image from "next/legacy/image";
import { manchesterImg, birkenheadImg } from "../../../utility/links";

interface Props {
  img: string;
  location: string;
  distance: string;
}

const SmallCard = ({ img, location, distance }: Props) => {
  if (location === "Manchester") {
    img = manchesterImg;
  }

  if (location === "Birkenhead") {
    img = birkenheadImg;
  }

  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transistion transform duration-200 ease-out">
      <div className="relative w-16 h-16">
        <Image
          src={img}
          alt="exploreTypesPics"
          className="rounded-lg"
          layout="fill"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
