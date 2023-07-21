import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../Blog/pagination.css'
import { AiFillLike, AiOutlineDislike, AiOutlineSearch, AiTwotoneDislike } from 'react-icons/ai';
import { SiBlogger } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import BlogCetegory from '../../Components/BlogCetegory/BlogCetegory';
import PopularPosts from '../../Components/PopularPosts/PopularPosts';

const BlogPagination = ({ data }) => {
    const itemsPerPage = 7;
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
            <div className='flex flex-col md:flex-row my-10'>
                <div className='md:w-1/3 rounded-md bg-white mr-3'>
                    <div className='flex justify-center items-center border rounded-md shadow-md'>
                        <input
                            type="text"
                            className=" py-4 px-5 rounded-md w-full focus:outline-none border focus:border-primary"
                            placeholder="Search your product"

                        />
                        <AiOutlineSearch className="text-sm text-gray-300  w-8 h-8" />
                    </div>
                  <div>
                    <BlogCetegory/>
                  </div>
                   <div>
                    <PopularPosts title="Popular Posts"/>
                   </div>
                </div>
                <div className="md:w-2/3 mr-2">
                    {
                        currentItems.map(data => (
                            <div key={data.btn} className="border w-full mt-5 rounded-md hover:border-primary mx-auto hover:shadow-lg  duration-300">
                                <div className='flex items-center flex-col md:flex-row'>
                                    <img src={data.img} className="w-full lg:w-[250px] lg:h-[230px] p-2" />
                                    <div className='px-5 w-full'>
                                        <h1 className="text-xl text-primary font-semibold cursor-pointer my-3 ">{data.heading}</h1>
                                        <p className="font-semibold text-gray-800">{data.details}</p>
                                        <div className='mt-3 flex justify-between items-center'>
                                            <p className='flex items-center  font-semibold'>
                                                <AiFillLike className='mr-1 text-primary' /> <span>34</span>
                                            </p>
                                            <p className='flex items-center  font-semibold'>
                                                <AiTwotoneDislike className='mr-1 text-primary' /> <span>6</span>
                                            </p>
                                        </div>
                                        <div className='flex justify-between items-center mt-3 border-t pt-1 text-gray-800'>
                                            <button className='flex justify-center font-semibold hover:bg-primary px-4 py-2 w-1/3 rounded-md hover:text-secondary duration-300'>
                                                <BiLike className='text-2xl mr-2' />
                                                Like</button>
                                            <button className='flex justify-center w-1/3 font-semibold hover:bg-primary px-x py-2 rounded-md hover:text-secondary duration-300'>
                                                <AiOutlineDislike className='text-2xl mr-2' />
                                                Dislike</button>
                                            <Link to='/blog-details'><h1 className="text-indigo-600 hover:text-primary my-auto cursor-pointer">{data.btn}</h1></Link>
                                        </div>
                                    </div>
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

export default BlogPagination;