import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useHookMenu from '../../../Hooks/UseMenu';
import Cover from '../Cover/Cover';
import imgcover from '../../../assets/images/img12.jpg';
import FoodCard from '../../../Component/FoodCard/FoodCard';
import { Link } from 'react-router-dom';
import FoodTab from './FoodTab/FoodTab';

const FoodOrder = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useHookMenu();

  // Filter menu categories with case-insensitive checks
  const SeaFood = menu.filter(item => item.category?.toLowerCase() === "seafood");
  const SaladItem = menu.filter(item => item.category?.toLowerCase() === "salad");
  const Dessert = menu.filter(item => item.category?.toLowerCase() === "dessert");
  const Pasta = menu.filter(item => item.category?.toLowerCase() === "pasta");
  const Offered = menu.filter(item => item.category?.toLowerCase() === "offered");

  return (
    <div>
      <Helmet title="Food_Order" />
      <Cover img={imgcover} title="Please Order" />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pasta</Tab>
          <Tab>Salad</Tab>
          <Tab>Dessert</Tab>
          <Tab>Seafood</Tab>
          <Tab>Offered</Tab>
        </TabList>

        <TabPanel>
         
          <FoodTab items={SeaFood}></FoodTab>
        </TabPanel>
        <TabPanel>
         
         <FoodTab items={SaladItem}></FoodTab>
       </TabPanel>
      
       <TabPanel>
         
         <FoodTab items={Dessert}></FoodTab>
       </TabPanel>

       <TabPanel>
         
         <FoodTab items={Pasta}></FoodTab>
       </TabPanel>

       <TabPanel>
         
         <FoodTab items={Offered}></FoodTab>
       </TabPanel>
      </Tabs>
    </div>
  );
};

export default FoodOrder;
