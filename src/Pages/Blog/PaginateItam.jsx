import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'
import { AiFillLike, AiOutlineDislike, AiOutlineSearch, AiTwotoneDislike } from 'react-icons/ai';
import { SiBlogger } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import BlogCetegory from '../../Components/BlogCetegory/BlogCetegory';


const PaginateItam = ({ data }) => {
    const itemsPerPage = 8;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
 
    return (
        <div className='max-w-screen-xl mx-auto p1'>
            <div className='flex flex-col-reverse md:flex-row my-10'>
                <div className='md:w-1/3 rounded-md bg-white mr-3'>
                    <div className='flex justify-center items-center border shadow-md'>
                        <input
                            type="text"
                            className=" py-4 px-5 rounded-md w-full"
                            placeholder="Search your product"

                        />
                        <AiOutlineSearch className="text-sm text-gray-300  w-8 h-8" />
                    </div>
                 <div>
                    <BlogCetegory/>
                 </div>
                    <div className="shadow-lg px-3 my-10">
                        <h1 className="font-semibold text-2xl my-5 text-primary">Popular Posts</h1>
                        <div className="flex flex-col lg:flex-row justify-center items-center group mt-5 p-3 border-t hover:shadow-lg cursor-pointer duration-300 ">
                            <img
                                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                                src="https://i.ibb.co/cyFpvgP/20230528144425-fpdl-in-lampe-sur-la-table-de-chevet-lampe-de-chevet-lumire-chaude-lire-un-livre-au-l.jpg"
                                alt=""
                            />
                            <div>
                                <h1 className="font-semibold text-xl mb-1 group-hover:text-primary">
                                    Due Jhonson
                                </h1>
                                <h1 className="text-sm group-hover:text-primary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                                    ipsa consequatur perferendis quos exercitationem provident.
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center group mt-5 border-t p-3 hover:shadow-lg cursor-pointer duration-300">
                            <img
                                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                                src="https://i.ibb.co/Sr0y8fN/20230528143405-fpdl-in-tableware-73492-136-large.jpg"
                                alt=""
                            />
                            <div>
                                <h1 className="font-semibold text-xl mb-1 group-hover:text-primary">
                                    Due Jhonson
                                </h1>
                                <h1 className="text-sm group-hover:text-primary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                                    ipsa consequatur perferendis quos exercitationem provident.
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center group mt-5 p-3 border-t hover:shadow-lg cursor-pointer duration-300">
                            <img
                                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                                src="https://i.ibb.co/yYKXs5c/20230528142004-fpdl-in-blue-sofa-contemporary-living-room-sofas-have-clipping-paths-410516-3690-larg.jpg"
                                alt=""
                            />
                            <div>
                                <h1 className="font-semibold text-xl mb-1 group-hover:text-primary">
                                    Due Jhonson
                                </h1>
                                <h1 className="text-sm group-hover:text-primary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                                    ipsa consequatur perferendis quos exercitationem provident.
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center group mt-5 p-3 border-t hover:shadow-lg cursor-pointer duration-300 ">
                            <img
                                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                                src="https://i.ibb.co/tPyTNgs/20230528142834-fpdl-in-modern-interior-bedroom-33739-556-large.jpg"
                                alt=""
                            />
                            <div>
                                <h1 className="font-semibold text-xl mb-1 group-hover:text-primary">
                                    Due Jhonson
                                </h1>
                                <h1 className="text-sm group-hover:text-primary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                                    ipsa consequatur perferendis quos exercitationem provident.
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center group mt-5 border-t p-3 hover:shadow-lg cursor-pointer duration-300">
                            <img
                                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                                src="https://i.ibb.co/fnmHHfV/20230528141303-fpdl-in-interior-living-lighting-room-with-sofa-3d-render-38322-949-large.jpg"
                                alt=""
                            />
                            <div>
                                <h1 className="font-semibold text-xl my-3 group-hover:text-primary">
                                    Due Jhonson
                                </h1>
                                <h1 className="text-sm group-hover:text-primary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                                    ipsa consequatur perferendis quos exercitationem provident.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mr-2">
                    {
                        currentItems.map(data => (
                            <div key={data.btn} className="border mx-auto p-4 hover:shadow-lg  duration-300">
                                <img src={data.img} className="w-full lg:w-[400px] h-[230px]" />
                                <h1 className="text-xl text-primary font-semibold cursor-pointer my-3 ">{data.heading}</h1>
                                <p className="font-semibold">{data.details}</p>
                                <div className='mt-3 flex justify-between'>
                                    <p className='flex items-center  font-semibold'>
                                        <AiFillLike className='mr-1 text-primary'/> <span>34</span>
                                    </p>
                                    <p className='flex items-center  font-semibold'>
                                        <AiTwotoneDislike className='mr-1 text-primary'/> <span>6</span>
                                    </p>
                                </div>
                              
                                    <div className='flex justify-between mt-3 border-t p-2 text-gray-800'>
                                        <button className='flex font-semibold hover:bg-primary px-2 py-1 rounded-md hover:text-secondary duration-300'>
                                        <BiLike className='text-2xl mr-2' />
                                            Like</button>
                                        <button className='flex font-semibold hover:bg-primary px-2 py-1 rounded-md hover:text-secondary duration-300'>
                                        <AiOutlineDislike  className='text-2xl mr-2' />
                                            Dislike</button>
                                            <Link to='/blog-details'><h1 className="text-indigo-600 hover:text-primary my-auto cursor-pointer">{data.btn}</h1></Link>
                                    </div>
                            </div>

                        ))
                    }
                </div>

            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<Previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-number'
                previousLinkClassName='page-number'
                nextLinkClassName='page-number'
                activeClassName='active'
            />
        </div>
    );
};

export default PaginateItam;