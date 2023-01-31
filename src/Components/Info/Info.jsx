import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.png';
import InfoCard from './InfoCard';
const Info = () => {
    return (
        <div className='px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass='' cardTitle='Opening Hours' img={clock}/>
            <InfoCard bgClass='bg-accent' cardTitle='Visit our location' className='bg-accent' img={marker}/> 
            <InfoCard bgClass='' cardTitle='Contact us now' img={phone}/> 
        </div>
    );
};

export default Info;