import React from 'react';
import Banner from './Banner';
import DoctorSologan from './DoctorSologan';
import InfoCard from './InfoCard';
import Service from './Service';
import Sologan from './Sologan';

const Home = () => {
    return (
        <>
        <div className='max-w-7xl mx-auto px-12'>
            <Banner/>
            <InfoCard/>
            <Service/>
            <Sologan/>
        </div>
            <DoctorSologan/>
        </>
    );
};

export default Home;