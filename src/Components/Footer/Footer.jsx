import React from 'react';
import footer from '../../assets/images/footer-bg.png';
const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10 ">
            <div className='footer'>
                <div className='p-5'>
                    <span className="footer-title text-xl">Services</span> 
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div> 
                <div className='p-5'>
                    <span className="footer-title text-xl">Company</span> 
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div> 
                <div className='p-5'>
                    <span className="footer-title text-xl">Legal</span> 
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;