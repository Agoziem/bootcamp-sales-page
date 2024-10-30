import Logo from "@/assets/logo.svg";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-dark text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex">
          <Image src={Logo} height={40} alt="Saas Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Courses</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-5 mt-6">
          <FaXTwitter className="text-2xl cursor-pointer" />
          <FaInstagram className="text-2xl cursor-pointer" />
          <FaLinkedinIn className="text-2xl cursor-pointer" />
          <FaFacebook className="text-2xl cursor-pointer" />
          <IoLogoWhatsapp className="text-2xl cursor-pointer" />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, inc All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
