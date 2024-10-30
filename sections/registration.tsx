import React from "react";

const Registration = () => {
  return (
    <section className="mt-8 py-8 bg-[#FFE8E8]">
      <div className="container md:flex items-center justify-between ">
        <h6 className="text-red-600 font-bold mb-5 md:mb-0 text-center md:text-start">Registration Deadline</h6>
        <div className="flex items-center justify-between gap-10 flex-wrap mb-5 md:mb-0">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">03</h2>
            <p>Days</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">15</h2>
            <p>hours</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">24</h2>
            <p>mins</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">33</h2>
            <p>secs</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="btn btn-primary bg-white text-black font-semibold w-[245px] h-[65px] rounded-[50px]">Enroll Now</button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
