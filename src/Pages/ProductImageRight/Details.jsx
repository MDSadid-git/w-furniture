import React from 'react';

const Details = () => {
    return (
        <div className='max-w-screen-xl bg-secondary mx-auto p-3 text-sm flex border-2 my-8 flex-col-reverse md:flex-row'>
            <div className='md:w-2/3'>
                <h1 className=' text-3xl font-semibold my-10 text-primary'>Product Details</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold'>
                    <div>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum.</li>
                    </div>
                    <div>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum.</li>
                    </div>
                </div>
                <hr className='border-t my-3' />
                <div className='font-semibold'>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                    <h3>Lorem, ipsum dolor.</h3>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <h3>Lorem, ipsum dolor.</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                </div>

            </div>
            <div className='md:w-1/3 my-auto'>
                <img src="https://images.woodenstreet.de/image/cache/data%2Fbook-shelves%2Fcagney-bookshelf-revised%2Fhoney%2Fupdated%2F1-750x650.jpg" alt="" />
            </div>
        </div>
    );
};

export default Details;