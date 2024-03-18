import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  img: string;
}

const BigCard = ({ title, img }: Props) => {
  return (
    <div className="items-center cursor-pointer hover:scale-105 transform transition duration-300 ease-out mb-10 mt-10">
      <div className="relative w-80 h-80">
        <Image
          src={img}
          alt="bigCardPics"
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl  mt-3">{title}</h3>
    </div>
  );
};

export default BigCard;
