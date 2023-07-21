import React from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const GalaryImage = ({image, name}) => {
    return (
        <div className='bg-secondary border group p-2 h-80 relative overflow-hidden cursor-pointer'>
            <img className='h-full w-full group-hover:scale-125 duration-300 ease-in' src={image} alt="" />
            <h1 className='absolute top-4 left-4 font-semibold text-center text-gray-800 text-lg sm:text-xl'>{name}</h1>
           
                <div className='absolute top-0 rounded-md group-hover:left-0 duration-700 left-[700px] flex justify-center items-center opacity-80 h-full w-full bg-primary'>
                <div className=''>
                    <button className='p-3 rounded-full text-primary duration-300 hover:bg-gray-800 hover:text-secondary bg-secondary mr-2 text-xl'><AiOutlineHeart /></button>
                    <button className='p-3 rounded-full text-primary duration-300 hover:bg-gray-800 hover:text-secondary bg-secondary mr-2 text-xl'><AiOutlineShoppingCart /> </button>
                </div>
                </div>

        </div>
    );
};

export default GalaryImage;