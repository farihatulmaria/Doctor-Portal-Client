import React from 'react';
import login from '../../assets/images/appointment.png';
const Contact = () => {
    return (
        <div style={{background:`url(${login})`}} className='bg-no-repeat contact flex justify-center items-center py-10 text-center'>
            <div>
                <h6 className="title">Contact Us</h6>
                <h3 className='font-light text-3xl my-6 text-white'>Stay connected with us</h3>
                <div className='space-y-4'>
                    <input type="email" placeholder="Email Address"  />
                    <input type="text" placeholder="Subject"  />
                    <textarea type="text" placeholder="Your message" className='textarea w-full textarea-primary max-w-md -ml-1' />
                    <button>submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;