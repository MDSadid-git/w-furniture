import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import animation from '../../../public/animation.json';
import Lottie from "lottie-react";


const Login = () => {
    const { register, handleSubmit } = useForm();



    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='w-full lg:w-2/4 mx-auto my-10 p-5 border rounded border-primary' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-center text-3xl font-semibold text-primary my-10'>Login User</h1>
            <div className='flex justify-center flex-col md:flex-row'>
                <div className='mr-3'>
                    <Lottie animationData={animation} loop={true} />
                </div>
                <div className='ml-3 mt-5 md:mt-0'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='my-2'>
                            <label className='font-semibold'>Your Email</label>
                            <input type='email' className='w-full border focus:outline-none focus:border-primary p-2 my-2 rounded' {...register("email")} placeholder='Type Your Email' required />
                        </div>
                        <div className='my-2'>
                            <label className='font-semibold'>Your Password</label>
                            <input type='password' className='w-full border focus:outline-none focus:border-primary p-2 my-2 rounded' {...register("password")} placeholder='Type Your Password' required />
                        </div>
                        <div>
                            <button className='w-full text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded font-semibold text-lg my-3 py-2' type='submit'>Submit</button>
                        </div>


                    </form>
                    <h1 className='text-center font-semibold'>New to secure shop please <Link to='/register' className='text-primary'>register</Link></h1>
                    <hr className='border-t-2 my-5' />
                    <div className='flex justify-evenly items-center hover:border-gray-800 border text-gray-800 hover:text-secondary border-primary rounded my-3 py-1 px-3 hover:bg-[#333533]  transition duration-500'>
                        <img className='w-10 h-10' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                        <button className='w-full text-center  font-semibold text-sm  '>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;