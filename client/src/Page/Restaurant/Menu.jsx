import React ,{useState} from 'react';

//components
import MenuCollection from '../../components/Restaurant/MenuCollection'


const Menu = () => {

const [menus, setMenus] = useState([
  {
    menuTitle: "Menu",
    image: [
      "https://b.zmtcdn.com/data/menus/043/3900043/4805d8ca03a16504635f00aebb3a1cbb.jpg",
      "https://b.zmtcdn.com/data/menus/043/3900043/917aba3ea57b3ad4d7f60e5162a1ae64.jpg",
    ],
  },
]);

    return (
        <>
            <div className="flex flex-wrap gap-3 my-8">
                {menus.map((menu)=>(
                    <MenuCollection {...menu}/>
                ))}
            </div>
        </>
    )
}

export default Menu
