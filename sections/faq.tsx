"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Questions = [
  {
    section_name: "What is the duration of the Bootcamp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa.",
  },
  {
    section_name: "What are the different sections in it",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa.",
  },
  {
    section_name: "When is it starting",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa.",
  },
  {
    section_name: "What are the different methodologies",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa.",
  },
];
const Faq = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section className="mt-8 py-8 pb-12">
      <div className="container">
        <hr className="bg-grey border" />
        <h2 className="text-3xl font-bold my-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-5 px-2 md:px-8">
          {Questions &&
            Questions.map((question, index) => (
              <div
                key={`${index}_${question.section_name}`}
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
                    {question.section_name}
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
                  <div className="px-5 py-5 w-full">
                    <p className="leading-loose">{question.content}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
