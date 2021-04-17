import React from 'react';
import ProfessionalChefs from '../ProfessionalChefs/ProfessionalChefs';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import OurClasses from '../OurClasses/OurClasses';
import WantToChef from '../promoForChef/promoForChef';
import FooterCombined from '../../Shared/FooterCombined/FooterCombined';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurClasses></OurClasses>
            <WantToChef></WantToChef>
            <ProfessionalChefs></ProfessionalChefs>
            <Testimonials></Testimonials>
            <FooterCombined></FooterCombined>
        </div>
    );
};

export default Home;