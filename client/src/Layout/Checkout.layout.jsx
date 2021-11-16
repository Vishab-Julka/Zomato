import React from 'react'
//components
import Navbar from "../components/Navbar/CheckoutNavbar"

const CheckoutLayout = (props) => {
    return (
        <>
           <Navbar/> 
           <div className="container mx-auto px-4 lg:px-20 xl:px-48">
              {props.children}
           </div>
        </>
    )
}

export default CheckoutLayout
