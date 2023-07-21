import React from 'react';
import {FiAward} from 'react-icons/fi'
import {MdOutlinePriceCheck} from 'react-icons/md'
import {BsTruck} from 'react-icons/bs'
import {GiStarGate} from 'react-icons/gi'

const OurPromise = () => {
    return (
       <div className='my-20 px-2'>
         <h1 className='text-3xl font-semibold text-primary my-10'>Our Promise</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-screen-xl mx-auto'>
            <div className='bg-secondary p-3 rounded-md group hover:bg-primary duration-500 cursor-pointer md:hover:-translate-y-8'>
                <span className='text-7xl my-3 text-gray-800 group-hover:text-secondary'>
                    <FiAward/>
                </span>
                <h1 className='text-primary group-hover:text-secondary my-2 text-xl font-semibold '>Exceptional Services</h1>
                <p className='group-hover:text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='bg-secondary p-3 rounded-md group hover:bg-primary duration-500 cursor-pointer md:hover:-translate-y-8'>
                <span className='text-7xl my-3 text-gray-800 group-hover:text-secondary'>
                    <MdOutlinePriceCheck/>
                </span>
                <h1 className='text-primary my-2 text-xl font-semibold group-hover:text-secondary'>Best Price</h1>
                <p className='group-hover:text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='bg-secondary p-3 rounded-md group hover:bg-primary duration-500 cursor-pointer md:hover:-translate-y-8'>
                <span className='text-7xl my-3 text-gray-800 group-hover:text-secondary'>
                    <BsTruck/>
                </span>
                <h1 className='text-primary my-2 text-xl font-semibold group-hover:text-secondary'>Free Delevary</h1>
                <p className='group-hover:text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='bg-secondary p-3 rounded-md group hover:bg-primary duration-500 cursor-pointer md:hover:-translate-y-8'>
                <span className='text-7xl my-3 text-gray-800 group-hover:text-secondary'>
                    <GiStarGate/>
                </span>
                <h1 className='text-primary my-2 text-xl font-semibold group-hover:text-secondary'>Our Guarantee</h1>
                <p className='group-hover:text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
       </div>
    );
};

export default OurPromise;