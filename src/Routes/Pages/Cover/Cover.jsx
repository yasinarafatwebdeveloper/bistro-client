import React from 'react';
import { Helmet } from 'react-helmet-async';

const Cover = ({img,title}) => {
    return (
        <div>

           
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${img})` }}
            >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cover;