import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import Offer from '../Offer/Offer';
import BookingForm from './BookingForm';
const Booking = ({date}) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { isLoading, error,refetch, data:appointments } = useQuery(['available',formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
      res.json())
    )
    if (isLoading){
        return <Loading/>
    }
 
    if (error){ 
        return <h3 className='text-red-700 font-bold'>An error has occurred: {error.message}</h3>
    }
  
    return (
        <div className='booking px-5 my-20'>
            <h6 className="title py-10">Available Appointments on {format(date, 'PP')}</h6>
            <div className="appointments grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    appointments?.map(appointment => <Offer key={appointment._id} setTreatment={setTreatment} appointment={appointment}/>)
                }
            </div>
            {treatment && <BookingForm refetch={refetch} Date={date} setTreatment={setTreatment} treatment={treatment}/>}
        </div>
    );
};

export default Booking;