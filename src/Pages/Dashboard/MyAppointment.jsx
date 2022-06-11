import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const  navigate = useNavigate();
    useEffect(() => {
      if(user){
        axios.get(`http://localhost:5000/booking?patientEmail=${user.email}`,{
              headers:{
                  'authorization':`user ${localStorage.getItem('accessToken')}`
              },
          }) 
          .then(res=>{
            if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/')
            } 
            setAppointments(res.data)
        })
      }
    }, [user])
    
    return (
        <div className='myAppointments'>
            {appointments.length === 0 ? "" : `MyAppointment : ${appointments.length}`}
            {
                appointments.length === 0 ?
                <div className='flex items-center justify-around h-40'>
                    <h1 className='font-bold text-3xl mx-4'>Sorry But, You Haven't Booked Yet</h1>
                </div>
                :
                <div className="overflow-x-auto my-5">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((a,index)=>
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{a.patient}</td>
                                    <td>{a.treatment}</td>
                                    <td>{a.date}</td>
                                    <td>{a.time}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                        {(a.price && a.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                        </div>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyAppointment;