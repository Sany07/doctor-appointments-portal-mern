import React from 'react';
import Card from '../../Components/Card';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

function InfoCard() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Card cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></Card>
            <Card cardTitle="Our Locations" bgClass="bg-neutral" img={marker}></Card>
            <Card cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></Card>
        </div>
    );
}

export default InfoCard;