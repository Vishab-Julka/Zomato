import React from "react";
import {BsShieldLockFill} from "react-icons/bs"
//components
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

const Checkout = () => {
  const address = [
    {
      name: "Home",
      address: "India",
    },
    {
      name: "Gyn",
      address: "India",
    },
    {
      name: "Office",
      address: "India",
    },
  ];

  return (
    <div className="flex flex-col gap-3 my-3 items-center">
      <h1 className="text-xl md:text-2xl font-bold  text-center">Checkout</h1>
      <div className="w-full md:w-3/5 bg-white rounded-lg shadow-lg py-3 flex flex-col items-center">
        <h3 className="text-lg fonr-semibold">Summary</h3>
        <div className="w-full flex flex-col items-center gap-2">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="w-full flex flex-col items-center text-gray-400">
            <h4>Domino's Pizza</h4>
            <small>Sigra, Varanasi</small>
          </div>
          <div className="my-4 w-full md:w-3/5 flex flex-col gap-2 px-4 ">
            <FoodItem name="pizza" quantity="3" price="90" />
            <FoodItem name="pizza" quantity="3" price="90" />
            <FoodItem name="pizza" quantity="3" price="90" />
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-3 ">
            <h4 className="text-xl font-semibold text-center  ">
              Select Address for Delivery
            </h4>
            <AddressList address={address} />
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 my-4 md:my-8  w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg ">
          Pay Securely <BsShieldLockFill/>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
