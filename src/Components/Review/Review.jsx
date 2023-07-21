import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const Review = ({image, name}) => {
    return (
        <div className='relative p-5 border bg-primary rounded-md'>
        <img className='w-36 h-36 mb-[-60px] rounded-[50%] mx-auto' src={image} alt="" />
        <div className='bg-secondary pt-20 text-gray-800 font-semibold rounded-br-3xl rounded-tl-3xl rounded-tr rounded-bl px-3'>
            <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam accusamus illum ullam doloribus nesciunt provident sequi repudiandae ut inventore!</h1>
            <h1 className='text-xl font-semibold text-center text-primary'>{name}</h1>
            <div className='text-yellow-500 text-2xl flex my-3 pb-3 justify-center items-center'>
                <span>< AiFillStar /></span>
                <span>< AiFillStar /></span>
                <span>< AiFillStar /></span>
                <span>< AiFillStar /></span>
                <span className='text-xl'><BsStarHalf /></span>
            </div>
        </div>

    </div>
    );
};

export default Review;