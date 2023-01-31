import React from 'react';
import quotes from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import SingleComment from './SingleComment';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:"Winson Herry",
            desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            country:"California",
            img: people1,
        },
        {
            _id:2,
            name:"Winson Herry",
            desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            country:"California",
            img: people2,
        },
        {
            _id:3,
            name:"Winson Herry",
            desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            country:"California",
            img: people3,
        },
    ]
    return (
        <section className='testimonials py-32 px-6'>
            <div className="section-title flex justify-between">
                <div>
                    <h6 className="title">Testimonial</h6>
                    <h3 className='font-light text-5xl my-3'>What Our Patients Says</h3>
                </div>
                <img className='w-24 lg:w-48' src={quotes} alt="" />
            </div>

             <div className='px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(comment => <SingleComment key={comment._id} comment={comment}/>)
            }
            </div>
        </section>
    );
};

export default Testimonials;