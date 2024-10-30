import React from "react";
import { FaCheck } from "react-icons/fa";

const Details = () => {
  return (
    <section className="mt-8 py-8 pb-12">
      <div className="container">
        <hr className="bg-grey border" />
        <h2 className="text-3xl font-bold my-12 text-center">
          This Bootcamp includes
        </h2>
        <div className="flex flex-col gap-8 px-4">
          <div className="flex gap-5 md:gap-7 leading-loose">
            <div className="flex justify-center items-center w-9 h-9 shrink-0 rounded-lg bg-[#E8E8FF] text-primary">
              <FaCheck />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>

          <div className="flex gap-5 md:gap-7 leading-loose">
            <div className="flex justify-center items-center w-9 h-9 shrink-0 rounded-lg bg-[#E8E8FF] text-primary">
              <FaCheck />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>


          <div className="flex gap-5 md:gap-7 leading-loose">
            <div className="flex justify-center items-center w-9 h-9 shrink-0 rounded-lg bg-[#E8E8FF] text-primary">
              <FaCheck />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>


          <div className="flex gap-5 md:gap-7 leading-loose">
            <div className="flex justify-center items-center w-9 h-9 shrink-0 rounded-lg bg-[#E8E8FF] text-primary">
              <FaCheck />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
