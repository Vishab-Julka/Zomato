import React from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

const FoodItem = (props) => {
  return (
    <>
      <div className="flex items-start  gap-2">
        <div className="w-3/12 h-20 md:h-28 xl:h-36 md:px-3">
          <img
            src={props.image}
            alt="food"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-3/4 md:w-7/12 flex flex-col md:gap-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-semibold">{props.title}</h3>
            <button className="text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg flex items-center gap-2 md:hidden">
              <AiOutlinePlus />
              Add
            </button>
          </div>
          <ReactStars count={5} value={props.rating} />
          <h5>₹{props.price}</h5>
          <p className="truncate">{props.description}</p>
        </div>
        <div className="w-2/12 hidden md:block">
          <button className=" text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-2 rounded-lg flex items-center gap-2">
            <AiOutlinePlus />
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
