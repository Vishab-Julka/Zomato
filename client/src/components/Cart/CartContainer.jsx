import React,{useState} from 'react'
import { IoMdArrowDropdown,IoMdArrowDropup,IoMdArrowDropright} from "react-icons/io"
import {IoCloseSharp} from "react-icons/io5"

// components
import FoodItem from './FoodItem'

const CartSM=({toggle,isOpen})=>{
    return (
      <>
        <div className="md:hidden flex items-center justify-between ">
          <div className="flex flex-col  items-start">
            <small className="flex items-center gap-1" onClick={toggle}>
              1 Item {isOpen ? <IoMdArrowDropdown/> :<IoMdArrowDropup />}
            </small>
            <h4>
              ₹300<sub>(plus tax)</sub>
            </h4>
          </div>
          <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 rounded-lg text-white">
            Continue <IoMdArrowDropright />
          </button>
        </div>
      </>
    );
}

const CartLg=({toggle,isOpen})=>{
    return (
      <>
        <div className="hidden md:flex items-center justify-between container mx-auto px-4 text-xl lg:px-20 xl:px-48">
          <div className="flex  gap-2  items-start">
            <span className="border border-gray-300 p-1 rounded bg-white cursor-pointer" onClick={toggle}>
            {isOpen ? <IoMdArrowDropdown/> :<IoMdArrowDropup />}
            </span>
            <h4>
                Your Orders (1)
            </h4>
          </div>
        <div className="flex items-center gap-2">
        <h4 className="text-xl">
            Subtotal:₹300<sub>(plus tax)</sub>
            </h4>
        <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 rounded-lg text-white text-lg font-light h-10">
            Continue <IoMdArrowDropright />
          </button>
        </div>
        </div>
      </>
    );
}


const CartContainer = () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggleCart =()=>setIsOpen((prev)=>!prev);
    const closeCart =() => setIsOpen(false)

    return (
        <>
            {isOpen && (
                <div className="fixed bottom-12  my-2 h-56 xl:h-60 w-full   bg-white p-2 px-3 z-10 overflow-y-auto ">
                <div className="flex items-center sticky -top-2 bg-white justify-between py-4"> <h3 className="text-xl font-semibold">Your Orders</h3>
                <IoCloseSharp onClick={closeCart} className="cursor-pointer"/>
                </div>
                <hr className="my-2" />
                <div className="flex flex-col gap-2">
                 <FoodItem name="pizza" quantity="3" price="90"/>
                 <FoodItem name="pizza" quantity="3" price="90"/>
                 <FoodItem name="pizza" quantity="3" price="90"/>
                 <FoodItem name="pizza" quantity="3" price="90"/>
                 <FoodItem name="pizza" quantity="3" price="90"/>
                 <FoodItem name="pizza" quantity="3" price="90"/>
                </div>
             </div>
            )}
            <div className="fixed bottom-0 w-full bg-white p-2 px-3 z-10">
              <CartSM toggle={toggleCart} isOpen={isOpen}/>
              <CartLg toggle={toggleCart} isOpen={isOpen}/>
            </div>
        </>
    )
}

export default CartContainer
