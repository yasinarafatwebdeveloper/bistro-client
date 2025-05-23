import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {


const[products,setProducts]=useState([])

useEffect(()=>{
fetch("menu.json")
.then(res=>res.json())
.then(data=>setProducts(data))

},[])

    return (
        <div>
            <SectionTitle heading="CHEF RECMMENDS" subheading={"Should Try"}></SectionTitle>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5'>
                {
                    products.map(product=><SingleProduct key={product._id} products={product}></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default Products;