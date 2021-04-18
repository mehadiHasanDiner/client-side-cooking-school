import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css"
import Carousel from 'react-bootstrap/Carousel'

const Testimonials = () => {

    const [userReview, setUserReview] = useState([]);

    useEffect(() => {
        fetch('https://agile-gorge-02356.herokuapp.com/userReview')
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [])


    return (
        <section className="testimonial-container mt-5">
                <h2 style={{color:"lightYellow", textAlign:"center", paddingTop:"30px"}}>Testimonials</h2>

            <Carousel className = "text-center">
            {
                 userReview.map(review => 
                <Carousel.Item key ={review._id} style={{marginTop:"380px"}}>
                    {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    /> */}
                    
                    <Carousel.Caption>
                        <p>" {review.description} "</p>
                        <hr style={{color:"white", border:"1px solid", marginTop:"50px", maxWidth:"50%"}}/>
                        <h4 style={{fontWeight:"bold", marginTop:"30px"}}> Name: {review.name}</h4>
                        <h4 style={{marginBottom:"30px"}}> Organization: {review.companyName}</h4>

                    </Carousel.Caption> 
                </Carousel.Item>
                )
            }
            </Carousel>

        </section>
    );
};

export default Testimonials;