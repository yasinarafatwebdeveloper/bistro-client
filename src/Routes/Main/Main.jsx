import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Layouts/Shared/Header/Header';
import Footer from '../../Layouts/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;