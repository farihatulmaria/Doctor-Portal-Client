import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import HomeAppointment from '../../Components/HomeAppointment/HomeAppointment';
import Info from '../../Components/Info/Info';
import Services from '../../Components/Services/Services';
import Testimonials from '../../Components/Testimonials/Testimonials';
const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Info/>
            <Services/>
            {/* <div className="hero h-[500px] my-72 bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="lg:max-w-lg md:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='p-32'>
                        <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </div> */}
            <HomeAppointment/>
            <Testimonials/>
            <Contact/>
        </div>
    );
};

export default Home;