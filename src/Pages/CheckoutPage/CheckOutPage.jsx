import React from 'react';
import { useForm } from "react-hook-form";
import BannerTitle from '../../Components/TitlePage/BannerTitle';

const CheckOutPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
       <div className='p-4 max-w-screen-xl mx-auto'>
        <div className='mx-auto'> <img className='w-full rounded-lg' src="https://i.ibb.co/0qt58Ld/20230528101852-fpdl-in-woman-green-blouse-jeans-standing-near-tablet-smartphone-one-hand-other-hand.jpg" alt="" /></div>
         <div className='flex flex-col md:flex-row mx-auto  rounded'>
             
            <div className=' mr-3 mx-auto'>
                <div className='bg-white p-4 my-5 rounded'>
                   
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-2">
                        <div className='mr-2 w-full'>
                            <label className='font-semibold'>First Name</label>
                            <input type='text' className='w-full border focus:border-primary focus:outline-none p-2 my-2 rounded' {...register("firstname")} placeholder='First Name' required />
                        </div>
                        <div className='ml-2 w-full'>
                            <label className='font-semibold'>Last Name</label>
                            <input type='text' className='w-full border focus:border-primary focus:outline-none p-2 my-2 rounded' {...register("lastname")} placeholder='Last Name' required />
                        </div>
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Company Name (Optinal)</label>
                        <input type='text' className='w-full border focus:border-primary focus:outline-none p-2 my-2 rounded' {...register("company")} placeholder='Company Name' required />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Country</label>
                        <input type='text' className='w-full border focus:border-primary focus:outline-none p-2 my-2 rounded' {...register("contry")} placeholder='Country' required />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Email Address</label>
                        <input type='email' className='w-full border focus:border-primary focus:outline-none p-2 my-2 rounded' {...register("email")} placeholder='Email' required />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Phone</label>
                        <input type='number' className='w-full border focus:border-primary focus:outline-none p-2 my-2 rounded' {...register("phone")} placeholder='phone' required />
                    </div>
                </form>
                </div>
            </div>
            <div className=' mx-auto'>
                <div className='bg-white p-4 my-5'>
                    <h1 className='text-xl font-semibold my-5'>Your Order</h1>
                    <div className='flex justify-between my-4'>
                        <>
                            <p>Product</p>
                        </>
                        <>
                            <p>Subtotal</p>
                        </>
                    </div>
                    <hr className='border-t my-3' />
                    <div className='flex justify-between my-3'>
                        <>
                            <p>Subtotal</p>
                        </>
                        <div>
                            <p>$44.00</p>
                        </div>
                    </div>
                    <hr className='border-t my-3' />
                    <div className='flex justify-between my-3'>
                        <>
                            <p>Total</p>
                        </>
                        <div>
                            <p>$44.00</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-4 my-5 rounded'>
                    <div className='flex my-2'>
                        <input type="radio" checked />
                        <h1 className='ml-3 text-gray-800 font-semibold'>Cash On Delivery</h1>
                    </div>
                    <div className='flex my-2'>
                        <input type="radio" />
                        <h1 className='ml-3 text-gray-800 font-semibold'>Online Payment</h1>
                    </div>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit expedita id iusto. Necessitatibus quisquam nisi mollitia quia. Quos, debitis!</p>
                    <div className='mt-5'>
                        <button className='w-full bg-primary hover:bg-gray-800 duration-300 py-3 rounded text-white font-semibold'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default CheckOutPage;