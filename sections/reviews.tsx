import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import ReviewImage1 from "@/assets/review1.png";
import ReviewImage2 from "@/assets/review2.jpg";
import ReviewImage3 from "@/assets/review3.jpg";
import StarRating from "@/components/StarRating";

const reviewData = [
  {
    category: "5",
    rating: 80,
  },
  {
    category: "4",
    rating: 60,
  },
  {
    category: "3",
    rating: 40,
  },
  {
    category: "2",
    rating: 20,
  },
  {
    category: "1",
    rating: 50,
  },
];

const reviewsList = [
  {
    img: ReviewImage1,
    reviewer: "John David",
    courseTitle: "Introduction to Android Development",
    rating: 4,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur.",
    date: "28th March",
    time: "10:10AM",
  },
  {
    img: ReviewImage2,
    reviewer: "Alice Smith",
    courseTitle: "Mastering React",
    rating: 5,
    reviewText:
      "Amazing course! The lessons were easy to follow, and I learned so much in a short time. Highly recommend to anyone looking to learn React!",
    date: "15th April",
    time: "3:30PM",
  },
  {
    img: ReviewImage3,
    reviewer: "Robert Green",
    courseTitle: "Understanding Machine Learning",
    rating: 3,
    reviewText:
      "Great content, but could have more practical examples. Overall, a solid course with a good introduction to ML concepts.",
    date: "12th May",
    time: "8:45AM",
  },
];

type ReviewItemProps = {
  img: StaticImageData;
  reviewer: string;
  courseTitle: string;
  rating: number;
  reviewText: string;
  date: string;
  time: string;
};

const ReviewItem = ({
  img,
  reviewer,
  courseTitle,
  rating,
  reviewText,
  date,
  time,
}: ReviewItemProps) => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 items-center">
      <Image
        src={img}
        alt="reviewer's image"
        className="rounded-full w-[60px] h-[60px] object-cover"
      />
      <p className="text-lg font-bold">{reviewer}</p>
    </div>
    <div className="flex gap-3 items-center">
      <FaPlay className="text-dark" />
      <h4 className="text-lg font-bold">{courseTitle}</h4>
    </div>
    <StarRating rating={rating} />
    <p className="leading-loose">{reviewText}</p>
    <div className="text-sm text-black text-opacity-60">
      <span className="mr-3">{date}</span>
      <span>{time}</span>
    </div>
  </div>
);

const Reviews = () => {
  return (
    <section className="mt-8 py-8 pb-12">
      <div className="container">
        <hr className="bg-grey border" />
        <h2 className="text-3xl font-bold my-12 text-center">Host Reviews</h2>
        <div className="flex flex-col justify-center items-center gap-20">
          {/* Rating */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-14 items-center p-5 md:p-8 md:px-12 border border-grey rounded-2xl w-full max-w-[850px]  shadow-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h6 className="text-[40px] font-bold">4.6</h6>
                <FaStar className="text-gold text-[25px]" />
              </div>
              <p className="text-sm">13K Reviews</p>
            </div>

            <div className="flex flex-col gap-3 w-full min-w-72">
              {reviewData &&
                reviewData.map((review,index) => (
                  <div className="flex gap-2 items-center" key={`${index}_${review.category}`}>
                    <div>{review.category}</div>
                    <div className="w-full h-[10px] relative bg-grey rounded-lg ">
                      <div
                        className="absolute top-0 left-0 h-full bg-gold rounded-lg"
                        style={{ width: `${review.rating}%` }}
                      ></div>
                    </div>
                    <div>{review.rating}</div>
                  </div>
                ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="flex flex-col gap-12 md:px-10">
            {reviewsList.map((review, index) => (
              <ReviewItem key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
