import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const SelectOption = () => {
    const [text, setText] = useState('All')
    const [show, setShow] = useState(false)
    const handleShow = (data) => {
        setText(data)
        setShow(false)
    }
    return (
        <div className='relative'>
            <span className='flex justify-between items-center bg-white py-2 px-4 mx-2 w-36 cursor-pointer' onClick={() => setShow(!show)}>{text} <IoIosArrowDown /></span>
            <div className={`absolute top-11 z-[9999] bg-white w-36 mx-2 rounded-md ${show ? 'visible' : 'invisible'}`}>
                <h1 className='border-t hover:bg-primary hover:text-secondary py-2 px-1 cursor-pointer pl-3' onClick={()=> handleShow('All')}>All</h1>
                <h1 className='border-t hover:bg-primary hover:text-secondary py-2 px-1 cursor-pointer pl-3'  onClick={()=> handleShow('Single-Bed')}>Single-Bed</h1>
                <h1 className='border-t hover:bg-primary hover:text-secondary py-2 px-1 cursor-pointer pl-3'  onClick={()=> handleShow('Double-Bed')}>Double-Bed</h1>
                <h1 className='border-t hover:bg-primary hover:text-secondary py-2 px-1 cursor-pointer pl-3'  onClick={()=> handleShow('Chair')}>Chair</h1>
                <h1 className='border-t hover:bg-primary hover:text-secondary py-2 px-1 cursor-pointer pl-3'  onClick={()=> handleShow('Dining-Room')}>Dining-Room</h1>
                <h1 className='border-t hover:bg-primary hover:text-secondary py-2 px-1 cursor-pointer pl-3'  onClick={()=> handleShow('Light')}>Light</h1>
            </div>
        </div>
    );
};

export default SelectOption;