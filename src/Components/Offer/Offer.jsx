import React from 'react';

const Offer = ({appointment,setTreatment}) => {
    const {name,slots,price}= appointment;
    return (
        <div className="card py-5 bg-base-100 shadow-xl w-50">
            <div className="card-body text-center">
                <h2 className="title">{name}</h2>
                <p className='text-accent font-medium'>Price : ${price}</p>
                <p>{slots.length > 0 ? slots[0] : "Try it on another day"}</p>
                <p className='text-sm'>{slots.length} {slots.length > 1 ? 'SPACES':'SPACE'} AVAILABLE</p>

                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointment)}
                        className="my-3 modal-button" 
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Offer;

/* 








*/
