"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { PiBroadcastFill } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

const Sections = [
  {
    section_name: "Introduction",
    content: [
      {
        name: "Introduction to Flutter",
        icon: <PiBroadcastFill className="text-primary text-lg" />,
      },
      {
        name: "Working with Widget",
        icon: <LuPencilLine className="text-primary text-lg" />,
      },
    ],
  },
  {
    section_name: "The Basics",
    content: [
      {
        name: "Introduction to Flutter",
        icon: <PiBroadcastFill className="text-primary text-lg" />,
      },
      {
        name: "Working with Widget",
        icon: <LuPencilLine className="text-primary text-lg" />,
      },
    ],
  },
  {
    section_name: "Intermediate",
    content: [
      {
        name: "Introduction to Flutter",
        icon: <PiBroadcastFill className="text-primary text-lg" />,
      },
      {
        name: "Working with Widget",
        icon: <LuPencilLine className="text-primary text-lg" />,
      },
    ],
  },
  {
    section_name: "Advanced",
    content: [
      {
        name: "Introduction to Flutter",
        icon: <PiBroadcastFill className="text-primary text-lg" />,
      },
      {
        name: "Working with Widget",
        icon: <LuPencilLine className="text-primary text-lg" />,
      },
    ],
  },
];
const Content = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  return (
    <section className="mt-8 py-8 pb-12">
      <div className="container">
        <hr className="bg-grey border" />
        <h2 className="text-3xl font-bold my-12 text-center">
          Bootcamp Content
        </h2>
        <div className="flex flex-col gap-5 px-2 md:px-8">
          {Sections &&
            Sections.map((section, index) => (
              <div
                key={`${index}_${section.section_name}`}
                className="flex flex-col gap-6 border border-grey rounded-xl px-10 py-7 w-full"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    if (activeTab === index) {
                      setActiveTab(null);
                    } else {
                      setActiveTab(index);
                    }
                  }}
                >
                  <h5 className="font-semibold">
                    Section {index + 1}: {section.section_name}
                  </h5>
                  <FaChevronDown
                    className={twMerge(
                      activeTab === index && "rotate-180",
                      "text-sm"
                    )}
                  />
                </div>
                <div
                  className={twMerge(
                    activeTab === index ? "flex" : "hidden",
                    " flex-col gap-5 px-0 md:px-8"
                  )}
                >
                  {section.content.map((content, index) => (
                    <div
                      className="border border-grey rounded-xl px-10  py-5 w-full"
                      key={`${index}_${content.name}`}
                    >
                      <span className="inline-flex items-center justify-center shrink-0 mr-4 mb-2 md:mb-0 p-3 border border-primary rounded-lg">
                        {content.icon}
                      </span>
                      <span>{content.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
