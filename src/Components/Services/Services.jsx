import React from 'react';
import service1 from '../../assets/images/service-1.png';
import service2 from '../../assets/images/service-2.png';
import service3 from '../../assets/images/service-3.png';
import SingleService from './SingleService';
const Services = () => {
    const services =[
        {
            _id:1,
            name:'Fluoride Treatment',
            desc:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:service1
        },        
        {
            _id:2,
            name:'Cavity Filling',
            desc:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:service2
        },      
        {
            _id:3,
            name:'Teeth Whitening',
            desc:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:service3
        },
    ]
    return (
        <section className='services my-32'>
            <div className="section-title my-5 text-center">
                <h6 className="title">OUR SERVICES</h6>
                <h3 className='font-light text-4xl my-5'>Services We Provide</h3>
            </div>
            <div className='px-10 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {
                    services.map(service => <SingleService key={service._id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;