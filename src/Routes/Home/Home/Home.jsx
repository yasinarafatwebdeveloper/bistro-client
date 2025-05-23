import React from 'react';
import Banner from '../Banner/Banner';
import Categori from '../Categori/Categori';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonals from '../Testimonals/Testimonals';
import Connection from '../Connection/Connection';
import Products from '../Products/Products';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            {/* this is home */}

             <Helmet>
                          <title>home page</title>
                        </Helmet>
            <Banner></Banner>
            <Categori></Categori>
            <PopularMenu></PopularMenu>
            <Connection></Connection>
            <Products></Products>
            <Featured></Featured>
            <Testimonals></Testimonals>
        </div>
    );
};

export default Home;