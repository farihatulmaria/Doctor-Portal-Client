import React from 'react';
import { DayPicker } from 'react-day-picker';
import AppointmentBannerImage from '../../assets/images/bg.png';
import BannerImg from '../../assets/images/chair.png';

const AppointmentBanner = ({selectedDate,setSelected}) => {
    
    return (
        <div className="hero h-[700px]" style={{
            background: `url(${AppointmentBannerImage})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} className="max-w-xs md:max-w-md lg:max-w-lg my-5 rounded-lg shadow-2xl" alt='' />
                <div className="px-0 lg:px-10">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                             <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelected}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;



/* 

   







*/