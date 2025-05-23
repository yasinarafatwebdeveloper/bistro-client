import React from 'react';
import Cover from '../Cover/Cover';
import coverImage from "../../../assets/images/img5.png";  // Change extension accordingly
import salad from "../../../assets/images/img2.png";
// import Dessert from"../../../../src/assets/images/img6"
import dessert from"../../../assets/images/img7.jpg"
import { Helmet } from 'react-helmet-async';
import CategoryMenue from './CategoryMenue/CategoryMenue';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useHookMenu from '../../../Hooks/UseMenu';
import SingleCategoryMenue from './SingleCategoryMenue/SingleCategoryMenue';
const Menu = () => {

const [menu]=useHookMenu()

const seaFood=menu.filter(items=>items.category==="Seafood")
const saladItem=menu.filter(items=>items.category==="Salad")
const Dessert=menu.filter(items=>items.category==="Dessert")
    return (
        <div>
             <Helmet>
                <title>Menu page</title>
            </Helmet>
        
            <Cover img={coverImage} title="Our Menus"></Cover>
         
            <SectionTitle subheading="do not miss" heading="Today is Offers"></SectionTitle>
            {/* <SectionTitle subheading="do not miss" heading="Today is Offers"></SectionTitle> */}

            <div className="grid grid-cols-2">
 
 {
   seaFood.map(items=><SingleCategoryMenue item={items}></SingleCategoryMenue>)
 }
           </div>
            <CategoryMenue img={salad} title="Salads"></CategoryMenue>
            <div className="grid grid-cols-2">
 
  {
    saladItem.map(items=><SingleCategoryMenue item={items}></SingleCategoryMenue>)
  }
            </div>
            <CategoryMenue img={dessert} title="Salads"></CategoryMenue>

            <div className="grid grid-cols-2">
 
 {
   Dessert.map(items=><SingleCategoryMenue item={items}></SingleCategoryMenue>)
 }
           </div>
        </div>
    );
};

export default Menu;