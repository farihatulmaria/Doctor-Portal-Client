import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentBannerImage from '../../assets/images/bg.png';
import BannerImage from '../../assets/images/chair.png';
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="hero h-[700px]" style={{
            background: `url(${AppointmentBannerImage})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImage} className=" max-w-xs md:max-w-md lg:max-w-lg my-5 rounded-lg shadow-2xl" alt=''/>
                <div>
                <h1 className="text-accent text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button onClick={()=>navigate('/appointment')}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;