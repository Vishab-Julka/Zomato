import React from "react";
import {TiStarOutline} from "react-icons/ti"
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//components
import RestaurantNavbar from "../components/Navbar/RestaurantNavbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButtons from "../components/Restaurant/InfoButtons";
import Restaurantinfo from "../components/Restaurant/Restaurantinfo";
import TabContainer from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";


const RestaurantLayout = (props) => {
  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 xl:px-48">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/chains/3/3900043/c79db30233beafc492d72c05463b4777_featured_v2.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/chains/3/3900043/1adb116d088669540c89150836d668f9.jpg?output-format=webp&fit=around|300:273",
            "https://b.zmtcdn.com/data/pictures/chains/3/3900043/a3f876979c7b1a123ff8d0548d774cb1.jpg?output-format=webp&fit=around|300:273",
            "https://b.zmtcdn.com/data/pictures/chains/3/3900043/2c7d1f324e6f10021ef521b64f75af36.jpg?output-format=webp&fit=around|300:273",
            "https://b.zmtcdn.com/data/pictures/3/3900493/f03698ac677f90ad40af3507a4d95ab9.jpg?output-format=webp&fit=around|960:500"
          ]}
        />
        <Restaurantinfo name="Domino's Pizza" restaurantRating="3.5" deliveryRating="3.2" cuisine="Pizza, Fast Food" address="Bhelupur, Varanasi"/>
      <div className="my-4 flex flex-wrap gap-3">
        <InfoButtons isActive>
          <TiStarOutline/> Add Review
        </InfoButtons>
        <InfoButtons >
        <div className="text-zomato-400"> <RiDirectionLine/> </div> Direction
        </InfoButtons>
        <InfoButtons >
        <div className="text-zomato-400"> <BiBookmarkPlus/></div> Bookmark
        </InfoButtons>
        <InfoButtons >
          <div className="text-zomato-400"><RiShareForwardLine/></div> Share
        </InfoButtons>
      </div>
    
       <div className="my-10">
         <TabContainer>
         
         </TabContainer>
         </div>
        <div className="relative">
        {props.children}
          </div> 
        
      </div>
       <CartContainer/> 
    </>
  );
};

export default RestaurantLayout;
