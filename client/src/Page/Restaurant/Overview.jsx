import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";


//components
import MenuCollection from "../../components/Restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../components/Restaurant/MenuSimilarRestaurantcard";
import { NextArrow, PrevArrow } from "../../components/CarousalArrow";
import ReviewCard from "../../components/Restaurant/Reviews/ReviewCard";
import Mapview from "../../components/Restaurant/Mapview";

const Overview = () => {
  const { id } = useParams();

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12 md:pr-8">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menus <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              image={["https://b.zmtcdn.com/data/menus/043/3900043/4805d8ca03a16504635f00aebb3a1cbb.jpg","https://b.zmtcdn.com/data/menus/043/3900043/917aba3ea57b3ad4d7f60e5162a1ae64.jpg"]}
            />
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Cuisines</h4>
            <div className="flex flex-wrap gap-2 ">
              <span className="border border-gray-600  text-blue-600 px-2 py-1 rounded-full">
                Pizza
              </span>
              <span className="border border-gray-600  text-blue-600 px-2 py-1 rounded-full">
                Fast Food
              </span>
            </div>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹400 for two people (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
          <Mapview title="Domino's Pizza" address="S 3/76, Ground Floor, Raj Complex, Mauza, Paharpur Mohalla, Pargana, Shivpur Ward, Orderly Bazar, Bhelupur, Varanasi" phno="+915422510201" mapLocation={[25.292672944666837, 82.99981973305584]}/>
          </div>
          <div className="my-4 ">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
           <div className="px-5 md:px-0  lg:px-0 ">
           <Slider {...settings}>
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/7/19498377/e7f282604503b2523dde0bc7bd720a6f_featured_v2.jpg?output-format=webp"
                title="Pizza Hut"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/7/19498377/e7f282604503b2523dde0bc7bd720a6f_featured_v2.jpg?output-format=webp"
                title="Pizza Hut"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/7/19498377/e7f282604503b2523dde0bc7bd720a6f_featured_v2.jpg?output-format=webp"
                title="Pizza Hut"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/7/19498377/e7f282604503b2523dde0bc7bd720a6f_featured_v2.jpg?output-format=webp"
                title="Pizza Hut"
              />
            </Slider>
           </div>
          </div>

          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your Delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          
          <div className="my-4 flex flex-col gap-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md rounded-xl flex-col gap-4  "
        >
          <Mapview title="Domino's Pizza" address="S 3/76, Ground Floor, Raj Complex, Mauza, Paharpur Mohalla, Pargana, Shivpur Ward, Orderly Bazar, Bhelupur, Varanasi" phno="+915422510201" mapLocation={[25.292672944666837, 82.99981973305584]}/>
        </aside>
      </div>
    </>
  );
};

export default Overview;
