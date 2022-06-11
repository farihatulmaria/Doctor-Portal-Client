import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1BHHFWjq1iR0syNNqMJVLXkFTpyNRUuesaqGFwIY4i1MplU7pbtAO1mUCcej1aZ4vsgIDaOD3q3RaMyboZmbDE00DVM7cxzk');

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const {data:appointment,isLoading,error} = useQuery(['booking',id], () =>
    fetch(url,{
        method:'GET',
        headers:{
            'authorization': `user ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
      res.json()))
      

      if(isLoading){
          return <Loading/>
      }
      
    return (
        <div>
            <div className="mx-5 h-[300px]">
                <div className="grid grid-cols-2 gap-4">
                    <div className="card max-w-md flex-shrink-0 w-full bg-base-100 shadow-xl my-12">
                        <div className="card-body">
                            <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                            <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
                            <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                            <p>Please pay: ${appointment.price}</p>
                        </div>
                    </div>
                    <div className="card max-w-md shadow-xl bg-base-100 my-12">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment} />
                            </Elements> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Payment;


/* <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod porro quasi accusamus debitis non molestias, consequuntur assumenda dolores id incidunt sunt. Ducimus nihil tenetur ab ad iusto consectetur, illo in.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */