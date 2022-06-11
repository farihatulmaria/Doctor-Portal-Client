import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.js';
import useToken from '../../hooks/useToken';
const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating ,updatingError] = useUpdateProfile(auth);

    const [token] = useToken(user||googleUser);

    const { register, handleSubmit } = useForm();
    const handleLoginWithEmailAndPass = async (data) => {
        const name = data.name;
        const email = data.email;
        const passWord = data.password;
        if(email && passWord){
            await createUserWithEmailAndPassword(email,passWord);
            await updateProfile({ displayName:name });
        }
    }

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    if(loading || updating || googleLoading){
        return <Loading/>
    }
    if(token){
        navigate(from);
    }
    return (
        <div className='SignUp'>
           <div className="flexible h-[700px]">
                <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-light mx-auto my-3">Sign Up</h2>
                            <form onSubmit={handleSubmit(handleLoginWithEmailAndPass)}>
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"{...register("name", {required: true, maxLength: 100})} />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", {
                                        required: {
                                            value:true,
                                            message:'Please type your email'
                                        },
                                        pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                                        })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {})} required />
                                </div>
                                <p className='text-xs underline my-3'><Link to="/sign-up">Forgot Password ?</Link></p>

                                <button className='w-full my-3'>Sign Up</button>
                            </form>
                            
                            <p className='text-sm text-center'>Already have an account?<Link className='!text-primary' to="/login">Login now</Link></p>

                            <p className="text-red-600 text-center">{error?.message ||updatingError?.message || googleError.message}</p>
                            
                            <div className="divider">OR</div>
                            
                            <button className='btn-outlined' onClick={()=>signInWithGoogle()}>Continue with Google</button>
                        </div>
                </div>
           </div>
        </div>
    );
};

export default SignUp;