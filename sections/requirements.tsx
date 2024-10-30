import React from "react";

const Requirements = () => {
  return (
    <section className="mt-8 py-8 pb-12">
      <div className="container">
        <hr className="bg-grey border" />
        <h2 className="text-3xl font-bold my-12 text-center">
          Requirements for this Bootcamp
        </h2>
      </div>
      <div className="ml-5 md:ml-32 pb-10 overflow-x-auto scrollbar-show ">
        <div className="flex gap-5">
          <div className=" shrink-0 border border-grey p-8 rounded-3xl w-[343px] h-[288px] flex flex-col gap-7">
            <div className="flex justify-center items-center shrink-0 bg-[#E8E8FF] text-primary font-bold text-2xl w-[70px] h-[70px] rounded-full">
              1
            </div>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>

          <div className=" shrink-0 border border-grey p-8 rounded-3xl w-[343px] h-[288px] flex flex-col gap-7">
            <div className="flex justify-center items-center shrink-0 bg-[#E8E8FF] text-primary font-bold text-2xl w-[70px] h-[70px] rounded-full">
              2
            </div>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>

          <div className="shrink-0 border border-grey p-8 rounded-3xl w-[343px] h-[288px] flex flex-col gap-7">
            <div className="flex justify-center items-center shrink-0 bg-[#E8E8FF] text-primary font-bold text-2xl w-[70px] h-[70px] rounded-full">
              3
            </div>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>

          <div className="shrink-0 border border-grey p-8 rounded-3xl w-[343px] h-[288px] flex flex-col gap-7">
            <div className="flex justify-center items-center shrink-0 bg-[#E8E8FF] text-primary font-bold text-2xl w-[70px] h-[70px] rounded-full">
              4
            </div>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
