import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='md:h-[700px] h-[550px] flex justify-center items-center'>
          <div>
            <h1 className='text-5xl lg:text-6xl font-bold'>4<span className='text-red-500'>0</span>4 error page</h1>
            <h1 className='text-center text-xl mt-5 font-semibold'>Back to <Link to='/' className='text-blue-500'>Home</Link></h1>
          </div>
        </div>
    );
};

export default ErrorPage;