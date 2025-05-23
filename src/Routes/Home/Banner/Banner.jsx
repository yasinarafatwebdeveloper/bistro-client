import React from 'react';


import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

// var ReactDOM = require('react-dom');


import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";
import img5 from "../../../assets/images/img5.png";
import img6 from "../../../assets/images/img6.png";


const Banner = () => {
    return (
        <div className='w-96h-96'>
              <Carousel>
                <div>
                    <img    src={img1} />
                  
                </div>
                <div>
                    <img src={img2} />
                  
                </div>
                <div>
                    <img src={img3} />
                  
                </div>
                <div>
                    <img src={img4} />
                  
                </div>
                <div>
                    <img src={img5} />
                  
                </div>
                <div>
                    <img src={img6} />
                  
                </div>
            
            </Carousel>
       
        </div>
    );
};

export default Banner;



