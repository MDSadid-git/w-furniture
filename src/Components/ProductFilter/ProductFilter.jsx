import React from 'react';

const ProductFilter = ({ title, onChange, children }) => {
    return (
        <div className='flex items-center'>
            <span className=" px-2 lg:px-0 mr-2 font-semibold">{title}</span>
            <select
                onChange={onChange}
                id="countries"
                className=" focus:ring-black-500 focus:border-primary focus:outline-none  block lg:w-[150px] w-auto mx-auto lg:mx-0   border border-[#F0F0F] p-2.5 text-base text-[#767676]  "
            >
                {children}
            </select>
        </div>
    );
};

export default ProductFilter;