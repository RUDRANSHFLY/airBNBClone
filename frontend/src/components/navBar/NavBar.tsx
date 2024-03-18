import React from "react";
import Image from "next/image";
import { airBnbLogo } from "../../../utility/links";
import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import { GlobeAltIcon } from "@heroicons/react/20/solid";

const NavBar = () => {
  return (
    <div
      id="navBar"
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10"
    >
      <div
        id="leftNavBarDiv"
        className="relative flex items-center h-10 hover:cursor-pointer"
      >
        <Image
          id="airBnbLogo"
          className="cursor-pointer"
          src={airBnbLogo}
          alt="AirBnb Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div
        id="middleNavBarDiv"
        className="flex items-center md:border-2 md:shadow-sm rounded-full py-2"
      >
        <input
          id="searchInput"
          className="pl-5 outline-0 bg-transparent font-semibold flex-grow text-sm text-gray-600"
          type="text"
          placeholder="Start your Search "
        />
        <MagnifyingGlassIcon
          id="serachIcon"
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-5"
        />
      </div>

      <div
        id="rightNavBarDiv"
        className="flex space-x-4 items-center justify-end text-gray-500"
      >
        <p className="hidden md:inline-flex">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3BottomRightIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
