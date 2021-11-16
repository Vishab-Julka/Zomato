import React from 'react';
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi"


//components
import FloatMenuBtn from '../../components/Restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer';
import FoodList from '../../components/Restaurant/Order-Online/FoodList';



const OrderOnline = () => {
    return (
      <>
        <div className="w-full flex h-screen ">
          <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200  w-1/4 h-screen overflow-y-auto">
            <MenuListContainer />
          </aside>
          <div className="w-full md:w-3/4 md:ml-6 ">
            <div className="md:pl-3  ">
              <h2 className="text-3xl font-semibold">Order Online</h2>
              <h4 className="flex items-center gap-2 font-light text-gray-500">
                <AiOutlineCompass /> Live track your order | <BiTimeFive /> 65
                min
              </h4>
            </div>
            <section className="flex flex-col gap-3 md:gap-5 my-4 md:h-screen md:overflow-y-auto md:pr-6 xl:pr-0 ">
              <FoodList
                title="Recommended"
                items={[
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                ]}
              />
              <FoodList
                title="Pizza"
                items={[
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                ]}
              />
              <FoodList
                title="Burger"
                items={[
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                ]}
              />
                            <FoodList
                title="Burger"
                items={[
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*",
                    price: "545",
                    rating: 3,
                    description:
                      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                    title: "Farmhouse",
                  },
                ]}

              />

              
            </section>
          </div>
        </div>
        <FloatMenuBtn />
      </>
    );
}

export default OrderOnline
