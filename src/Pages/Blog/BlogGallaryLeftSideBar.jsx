import React from 'react';
import BlogPostGallery from './BlogPostGallery';
import BlogCetegory from '../../Components/BlogCetegory/BlogCetegory';
import PopularPosts from '../../Components/PopularPosts/PopularPosts';

const BlogGallaryLeftSideBar = () => {
    return (
        <div className='max-w-screen-xl flex mx-auto'>
            <div className='w-1/3 mr-4'>
                <BlogCetegory />
                <PopularPosts title="Recent Posts" />
                <PopularPosts title="Popular Posts" />
            </div>
            <div className='w-2/3'>
                <BlogPostGallery />
            </div>
        </div>
    );
};

export default BlogGallaryLeftSideBar;