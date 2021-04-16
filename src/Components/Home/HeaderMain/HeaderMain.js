import React from 'react';
import hat from '../../../image/hat.png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="align-items-center header-container">
            <div className="container row">
            <div className="col-md-8">
                
                
            </div>
            <div className="col-md-4 pl-5 text-white mt-5 text-center">
                <img src={hat} alt="" className="img-fluid mb-3"/>
                <h1>The Art of Cooking</h1>
                <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className ="btn-brand text-uppercase"> Learn More</button>
            </div>
            </div>
        </main>
    );
};

export default HeaderMain;