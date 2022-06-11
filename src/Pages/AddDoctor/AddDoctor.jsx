import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';
const AddDoctor = () => {
    const { register,formState: { errors },reset, handleSubmit } = useForm();
    const imageStorage_KEY = '819f223923061b4eb407559d94688bce';

    const { isLoading, error, data:services } = useQuery('services', () =>
    fetch(`http://localhost:5000/services`,{
        method:'GET',
        headers:{
            'authorization': `user ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
      res.json())
    )
    const addADoctor = async (data) =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorage_KEY}`;
        fetch(url,{
            method:'POST',
            body: formData
        })
        .then(res =>res.json())
        .then(result=>{
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img,
                }
                const url = 'http://localhost:5000/doctors';
                 fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type':'application/json',
                        'authorization':`user ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor),
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Doctor added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the doctor');
                    }
                })

            }  
        })
    }

    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='SignUp'>
        <div className="flexible h-[700px]">
             <div className="card w-96 bg-base-100 shadow-xl">
                     <div className="card-body">
                         <h2 className="card-title font-light mx-auto my-3">Add a Doctor</h2>
                         <form onSubmit={handleSubmit(addADoctor)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Doctor's Name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Doctor's Email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Specialty</span>
                                </label>
                                <select {...register('specialty')} className="select  input-bordered input-primary max-w-xs">
                                    {
                                        services.map(service => <option
                                            key={service?._id}
                                            value={service?.name}
                                        >{service?.name}</option>)
                                    }
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                              <input
                                    type="file"
                                    name='file'
                                    id='file'
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                /> 
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <button className='w-full my-3' value="Add">Add</button>
                        </form>
                     </div>
             </div>
        </div>
     </div>
    );
};

export default AddDoctor;