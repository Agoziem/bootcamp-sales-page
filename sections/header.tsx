import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-20 ">
      <div className="flex items-center justify-between h-[90px] shadow-md px-10">
        <div className="flex p-3 px-7 items-center justify-between gap-3 border border-[#C4C4C4] rounded-[30px] shadow-md shadow-[#7C7C7C26]">
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="Logo" />
            <p>App</p>
          </div>
          <FaChevronDown className="cursor-pointer" />
        </div>

        <div className="hidden md:flex items-center border border-grey rounded-[27.5px] overflow-hidden">
          <div className="flex items-center space-x-2 px-5 pr-8 py-3 bg-white rounded-lg">
            <IoMdSearch className="text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Android"
              className="border-none outline-none focus:ring-0 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2 px-4 py-3 ml-2 bg-grey  cursor-pointer">
            <p className="">All</p>
            <FaChevronDown className="text-sm" />
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href={""} className="font-bold text-primary">Get Started</Link>
          <button className="btn btn-primary px-9 py-4 rounded-[30px]">
            Login
          </button>
        </nav>

        <IoMenu className="md:hidden text-4xl" />
      </div>
    </header>
  );
};

export default Header;
