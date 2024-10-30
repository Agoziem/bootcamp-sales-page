import Image from "next/image";
import React from "react";
import CertificateImage from "@/assets/Certificate.jpeg";

const Certificate = () => {
  return (
    <section className="mt-8 py-8 pb-12">
      <div className="container">
        <hr className="bg-grey border" />
        <h2 className="text-3xl font-bold my-12 text-center">
          You’ll get A Certificate of Completion
        </h2>
        <div className="flex justify-center ">
          <Image src={CertificateImage} alt="certificate" className="w-full max-w-[942px] h-auto border border-grey" />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
