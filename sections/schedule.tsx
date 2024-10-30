import React from "react";
import { BsClockFill } from "react-icons/bs";
import { RiCalendar2Fill } from "react-icons/ri";

const Schedule = () => {
  return (
    <section className="mt-8 py-8 pb-12">
      <div className="container">
        <hr className="bg-grey border" />
        <h2 className="text-3xl font-bold my-12 text-center">
          Live Class Schedule
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="border border-grey flex flex-col gap-5 p-6 px-10 rounded-xl">
            <p>Live Class</p>
            <div className="flex gap-2 items-center">
              <RiCalendar2Fill className="text-lg" />
              <p>Every Tuesday</p>
            </div>
            <div className="flex gap-2 items-center">
              <BsClockFill className="text-lg" />
              <p>4:00PM - 6:00PM (WAT)</p>
            </div>
          </div>

          <div className="border border-grey flex flex-col gap-5 p-6 px-10 rounded-xl">
            <p>Live Class</p>
            <div className="flex gap-2 items-center">
              <RiCalendar2Fill className="text-lg" />
              <p>Every Tuesday</p>
            </div>
            <div className="flex gap-2 items-center">
              <BsClockFill className="text-lg" />
              <p>4:00PM - 6:00PM (WAT)</p>
            </div>
          </div>

          <div className="border border-grey flex flex-col gap-5 p-6 px-10 rounded-xl">
            <p>Live Class</p>
            <div className="flex gap-2 items-center">
              <RiCalendar2Fill className="text-lg" />
              <p>Every Tuesday</p>
            </div>
            <div className="flex gap-2 items-center">
              <BsClockFill className="text-lg" />
              <p>4:00PM - 6:00PM (WAT)</p>
            </div>
          </div>

          <div className="border border-grey flex flex-col gap-5 p-6 px-10 rounded-xl">
            <p>Live Class</p>
            <div className="flex gap-2 items-center">
              <RiCalendar2Fill className="text-lg" />
              <p>Every Tuesday</p>
            </div>
            <div className="flex gap-2 items-center">
              <BsClockFill className="text-lg" />
              <p>4:00PM - 6:00PM (WAT)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
