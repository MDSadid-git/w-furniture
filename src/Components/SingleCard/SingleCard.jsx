import React from 'react';
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const SingleCard = ({ img, price, oldPrice, sku, name }) => {
    return (
        <div className='cursor-pointer relative flex items-center bg-secondary my-5 mx-5 rounded-md p-3'>
            <div className='w-2/5'>
                <img className='w-full h-60 rounded-t-md' src={img} alt="" />
            </div>
            <div className='w-3/5 ml-3'>
                <p className='font-semibold absolute top-4 right-5 text-gray-800'>SKU-{sku}</p>
                <div className='my-2 font-semibold'>
                    <p className='text-xl text-primary'>{name}</p>
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, praesentium labore. Repellat, voluptatibus voluptate nobis accusantium et quibusdam assumenda voluptates.</p>

                </div>
                <div className='flex justify-between'>
                    <p className='text-xl font-semibold text-primary'>${price}</p>
                    <p className='line-through text-lg font-semibold text-gray-800'>${oldPrice}</p>
                </div>
                <div className="flex ">
                    <AiFillStar className="text-yellow-500 text-2xl" />
                    <AiFillStar className="text-yellow-500 text-2xl" />
                    <AiFillStar className="text-yellow-500 text-2xl" />
                    <AiFillStar className="text-yellow-500 text-2xl" />
                    <AiFillStar className="text-yellow-500 text-2xl" />
                </div>
                <div className='flex mt-5'>
                    <button className='p-3 rounded-full text-secondary bg-primary hover:bg-gray-800  duration-300 mr-1 text-xl'><AiOutlineHeart /></button>
                    <button className='flex justify-between bg-primary hover:bg-gray-800  duration-300 items-center text-secondary px-5 py-1 rounded-full text-sm font-semibold'> <span className='text-xl'><AiOutlineShoppingCart /></span> Add To Card</button>
                </div>
            </div>

        </div>
    );
};

export default SingleCard;