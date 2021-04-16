import React from 'react';
import './promo-container.css';

const promoForChef = () => {
    return (
        <section className = "container promo-container mt-5">
            <div className="row" style={{height:"180px"}}>
                <div className="col-md-8 d-flex align-items-center justify-content-end">
                    <div className="text-center">
                    <h2>Want To Be a Chef ?</h2>
                    <p className="text-secondary"> <small>Our Cooking School offers a variety of classes for students of all levels.</small> </p>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-start">
                    <button className="btn-brand-white text-uppercase">Send Request</button>
                </div>
            </div>
        </section>
    );
};

export default promoForChef;