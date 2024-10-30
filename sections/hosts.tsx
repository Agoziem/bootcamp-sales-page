"use client";
import Image from "next/image";
import React from "react";
import HostImage from "@/assets/host_image1.png";
import CoHostImage1 from "@/assets/co-host1.png";
import CoHostImage2 from "@/assets/co-host2.png";
import Instructor1 from "@/assets/guest_instructor1.png";
import Instructor2 from "@/assets/guest_instructor2.png";
import Instructor3 from "@/assets/guest_instructor3.png";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants/variant";

const Staff = {
  host: {
    username: "@jessno1",
    name: "Jessica Noah",
    img: HostImage,
  },
  co_host: [
    {
      username: "@johndoe",
      name: "John Doe",
      img: CoHostImage1,
    },
    {
      username: "@oche10",
      name: "Oche Writes",
      img: CoHostImage2,
    },
  ],
  instructors: [
    {
      username: "@jessno1",
      name: "Jessica Noah",
      img: Instructor1,
    },
    {
      username: "@jessno1",
      name: "Jessica Noah",
      img: Instructor2,
    },
    {
      username: "@jessno1",
      name: "Jessica Noah",
      img: Instructor3,
    },
  ],
};

const Hosts = () => {
  return (
    <section className="mt-8 py-8">
      <div className="container">
        <hr className="bg-grey border" />
        {/* Host */}
        <h2 className="text-3xl font-bold my-12 text-center">Host</h2>
        {Staff && (
          <div className="flex flex-col md:flex-row items-center gap-9 md:px-8">
            {/* The Image */}
            <div>
              <motion.img
                src={Staff.host.img.src}
                alt="Staff Image"
                className="rounded-[36px]"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
              />
            </div>
            {/* The details */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
            >
              <p className="text-[#474747] text-lg">{Staff.host.username}</p>
              <h4 className="mt-1 font-bold text-[32px]">{Staff.host.name}</h4>
              <p className="mt-3 text-lg leading-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                quam pulvinar interdum porttitor elit quis elementum duis
                curabitur.{" "}
              </p>
              <div className="mt-3 flex flex-row flex-wrap gap-7 md:gap-11">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h6 className="text-[20px] font-bold">4.6</h6>
                    <FaStar className="text-gold" />
                  </div>
                  <p className="text-sm">13K Reviews</p>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-[20px] font-bold">330,256</h6>
                  <p className="text-sm">Transactions</p>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-[20px] font-bold">8,315</h6>
                  <p className="text-sm">Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Co-Hosts */}
        <h2 className="text-3xl font-bold my-12 text-center">Co-Host</h2>
        {Staff &&
          Staff.co_host.map((co_host, index) => (
            <div
              className="flex flex-col md:flex-row items-center gap-9 md:px-8 mb-10"
              key={`${index}_${co_host.name}`}
            >
              {/* The Image */}
              <div>
                <motion.img
                  src={co_host.img.src}
                  alt="Staff Image"
                  className="rounded-[36px]"
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                />
              </div>
              {/* The details */}
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
              >
                <p className="text-[#474747] text-lg">{co_host.username}</p>
                <h4 className="mt-1 font-bold text-[32px]">{co_host.name}</h4>
                <p className="mt-3 text-lg leading-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Semper quam pulvinar interdum porttitor elit quis elementum
                  duis curabitur.{" "}
                </p>
                <div className="mt-3 flex flex-row flex-wrap gap-7 md:gap-11">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h6 className="text-[20px] font-bold">4.6</h6>
                      <FaStar className="text-gold" />
                    </div>
                    <p className="text-sm">13K Reviews</p>
                  </div>
                  <div className="flex flex-col">
                    <h6 className="text-[20px] font-bold">330,256</h6>
                    <p className="text-sm">Transactions</p>
                  </div>
                  <div className="flex flex-col">
                    <h6 className="text-[20px] font-bold">8,315</h6>
                    <p className="text-sm">Customers</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}

        {/* Instructors */}
        <h2 className="text-3xl font-bold my-12 text-center">
          Guest Instructors
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:3 justify-between">
          {Staff &&
            Staff.instructors.map((instructor, index) => (
              <div
                className="flex flex-col gap-3"
                key={`${index}_${instructor.name}`}
              >
                <motion.img
                  src={instructor.img.src}
                  alt={instructor.name}
                  className="rounded-[24px] w-[310px]"
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                />
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                >
                  <p className="text-[#474747] text-lg">
                    {instructor.username}
                  </p>
                  <h4 className="mt-1 font-bold text-[25px]">
                    {instructor.name}
                  </h4>
                  <p className="mt-3 text-lg leading-[32px] pr-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Semper quam pulvinar interdum porttitor elit quis elementum
                    duis curabitur.{" "}
                  </p>
                </motion.div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hosts;
