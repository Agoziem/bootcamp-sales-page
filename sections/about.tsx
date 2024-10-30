"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="mt-8 mb-5 py-8">
      <div className="container flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10">About this Bootcamp</h2>
        {/* React Player only renders on the client */}
        <div className="w-[80vw] h-[60vw] max-w-[750px] max-h-[450px]">
          {isClient && (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls
              width="100%"
              height="100%"
            />
          )}
        </div>

        {/* Write-up section */}
        <div className="mt-10 mb-8 max-w-[1000px]">
          <p className="text-center leading-[40px] text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam
            pulvinar interdum porttitor elit quis elementum duis curabitur.
            Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur.
            Viverra vel ornare mauris donec aenean gravida aliquet vestibulum
            quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
            blandit massa. Adipiscing ac ut eros, sed aenean justo lacinia
            ornare consectetur.
          </p>
        </div>

        <div className="hover:bg-gray-100 px-5 py-3 rounded-lg transition ease-in-out">
          <Link href={""} className="font-bold text-lg text-primary">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
