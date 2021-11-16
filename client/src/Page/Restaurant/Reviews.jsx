import React, { useState } from "react";



//componets
import ReviewCard from "../../components/Restaurant/Reviews/ReviewCard";
import AddReviewCard from "../../components/Restaurant/Reviews/AddReviewCard";


const Reviews = () => {
  const [reviews, setReviews] = useState(["", "", ""]);
  

  return (
    <>
      <div className="w-full flex  flex-col md:flex-row relative">
        <div className=" w-full md:w-8/12 flex flex-col gap-3 md:pr-8">
          <div className="md:hidden shadow-md rounded-xl p-3 flex flex-col gap-2 items-start ">
          <AddReviewCard/>
          </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md rounded-xl flex-col gap-2  items-start"
        >
         <AddReviewCard/>
        </aside>
      </div>
    </>
  );
};

export default Reviews;
