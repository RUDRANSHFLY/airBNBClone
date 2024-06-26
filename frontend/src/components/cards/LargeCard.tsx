import React from "react";
import Image from "next/legacy/image";
interface Props {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
          alt="LardCard"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button
          type="submit"
          className="text-white bg-gray-900 px-4 py-2 rounded-lg mt-5"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
