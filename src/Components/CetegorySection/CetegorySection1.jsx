import React from 'react';
import { useState } from 'react';

const CetegorySection1 = ({ heading, img1, img2, img3, img4 }) => {
    const [image, setImage] = useState(img1)
    const handleImage = (img) => {
        setImage(img);
    }
    return (
        <>
            <h1 className='text-lg font-bold my-5'>{heading}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-12 mt-4'>

                <div className='lg:col-span-8 overflow-hidden'>

                    <img className='lg:h-[550px]  w-full hover:scale-105 duration-300 cursor-pointer' src={image} alt="" />
                </div>
                <div className='lg:col-span-4 mt-3 grid grid-cols-2 gap-3 lg:ml-4'>
                    <div className='lg:w-40 lg:h-40 mx-auto bg-secondary overflow-hidden' onClick={()=>handleImage(img2)}>

                        <img className='w-full h-full hover:scale-110 duration-300 cursor-pointer' src={img2} alt=""  />
                    </div>
                    <div className='lg:w-40 lg:h-40 mx-auto bg-secondary overflow-hidden' onClick={()=>handleImage(img3)}>
                        <img className='w-full h-full hover:scale-110 duration-300 cursor-pointer' src={img3} alt="" />

                    </div>
                    <div className='lg:w-40 lg:h-40 mx-auto bg-secondary overflow-hidden' onClick={()=>handleImage(img4)}>
                        <img className='w-full h-full border hover:scale-110 duration-300 cursor-pointer' src={img4} alt="" />

                    </div>
                    <div className='lg:w-40 lg:h-40 mx-auto bg-secondary overflow-hidden' onClick={()=>handleImage(img2)}>

                        <img className='w-full h-full border hover:scale-110 duration-300 cursor-pointer' src={img2} alt="" />
                    </div>
                    <div className='lg:w-40 lg:h-40 mx-auto bg-secondary overflow-hidden' onClick={()=>handleImage(img3)}>
                        <img className='w-full h-full hover:scale-110 duration-300 cursor-pointer' src={img3} alt="" />

                    </div>
                    <div className='lg:w-40 lg:h-40 mx-auto bg-secondary overflow-hidden' onClick={()=>handleImage(img4)}>
                        <img className='w-full h-full border hover:scale-110 duration-300 cursor-pointer' src={img4} alt="" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default CetegorySection1;