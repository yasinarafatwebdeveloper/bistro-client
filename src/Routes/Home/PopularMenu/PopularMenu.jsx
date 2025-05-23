import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import PopularMenuItems from "./PopularMenuItems";
import useHookMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch("menu.json")
    //         .then((res) => res.json())
    //         .then((data)=>{

    //             const menuItems=data.filter(menuItem=>menuItem.category==="Ramazan")
    //             setMenu(menuItems)
    //         } )
    // }, []); 


  const [menu]=useHookMenu()

  const popular=menu.filter(items=>items.category==="Ramazan")


    return (
        <section>
            <SectionTitle heading="Check it Out" subheading="From Our Menu" />
            <div className="grid grid-cols-2">
        {
            popular.map(items=><PopularMenuItems item={items}></PopularMenuItems>)
        }
            </div>
        </section>
    );
};

export default PopularMenu;
