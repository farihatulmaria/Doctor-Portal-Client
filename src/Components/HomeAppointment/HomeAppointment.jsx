import React from 'react';
import { useNavigate } from 'react-router-dom';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
const HomeAppointment = () => {
    const navigate = useNavigate();
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='pt-12 flex justify-center items-center'>
            <div className='ml-32 flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 mr-32'>
                <h3 className='title !text-left'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button onClick={()=>navigate('/appointment')}>Get Started</button>
            </div>
        </section>
    );
};

export default HomeAppointment;