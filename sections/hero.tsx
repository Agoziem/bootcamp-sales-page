import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaRegClock, FaRegHeart } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { RiShapesLine } from "react-icons/ri";
import HeroImage from "@/assets/hero_image.png";

const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10">
      <div className="container">
        <div className="mt-3">
          <FaArrowLeft className="text-2xl" />
        </div>
        <div className="flex flex-col md:flex-row mt-9 gap-8 md:gap-11  md:justify-between">
          <div>
            <h1 className="text-5xl font-bold leading-snug">
              Foundation of Android Development
            </h1>
            <p className="mt-6 text-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur.
            </p>
            <div className="mt-8 flex items-center flex-wrap gap-6 md:gap-11">
              <div className="flex items-center gap-2">
                <RiShapesLine />
                <p>Bootcamp</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRegClock />
                <p>4 Weeks</p>
              </div>
              <div className="flex items-center gap-2">
                <LuCalendarDays />
                <p>3rd December</p>
              </div>
            </div>

            <h2 className="mt-12 text-4xl font-bold">N30,000</h2>

            <div className="mt-10 flex items-center gap-4">
              <button className="btn btn-primary w-[240px] h-[60px] rounded-[50px]">
                Enroll Now
              </button>
              <FaRegHeart className="text-3xl" />
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src={HeroImage}
              alt="hero image"
              className="w-[890px] h-[520px] object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
