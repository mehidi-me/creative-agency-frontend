import React from 'react';
import BrandLogo from '../Componets/Home/BrandLogoSection/BrandLogo';
import HeaderSection from '../Componets/Home/HeaderSection/HeaderSection';
import ServiceSection from '../Componets/Home/ServiceSection/ServiceSection';
import WorkSection from '../Componets/Home/WorkSection/WorkSection';
import FeedBackSection from '../Componets/Home/FeedBackSection/FeedBackSection';
import ContactSection from '../Componets/Home/ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
            <HeaderSection></HeaderSection>
            <BrandLogo></BrandLogo>
            <ServiceSection></ServiceSection>
            <WorkSection></WorkSection>
            <FeedBackSection></FeedBackSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;