"use client";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaRegClock, FaRegHeart } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { RiShapesLine } from "react-icons/ri";
import HeroImage from "@/assets/hero_image.png";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants/variant";

const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10">
      <div className="container">
        <div className="mt-3">
          <FaArrowLeft className="text-2xl" />
        </div>
        <div className="flex flex-col md:flex-row mt-9 gap-8 md:gap-11  md:justify-between">
          <div>
            <motion.h1
              className="text-5xl font-bold leading-snug"
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
            >
              Foundation of Android Development
            </motion.h1>
            <motion.p
              className="mt-6 text-[19px]"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur.
            </motion.p>
            <div className="mt-8 flex items-center flex-wrap gap-6 md:gap-11">
              <motion.div
                className="flex items-center gap-2"
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
              >
                <RiShapesLine />
                <p>Bootcamp</p>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
              >
                <FaRegClock />
                <p>4 Weeks</p>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
              >
                <LuCalendarDays />
                <p>3rd December</p>
              </motion.div>
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
            <motion.img
              src={HeroImage.src}
              alt="hero image"
              className="w-[890px] h-[520px] object-cover rounded-[24px]"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
