import React from 'react';
import DetailsSection from './DetailsSection'
import Details from './Details'
import TopSale from '../../Components/TopSale/TopSale';
import OurPromise from '../../Components/OurPromise/OurPromise';
import Review from '../../Components/Review/Review';

const ProductImageRight = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-5'>
            <DetailsSection/>
            <TopSale/>
            <h1 className='text-center text-4xl font-semibold my-10 text-primary'>Customer Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-5 my-10 p-5'>
                <Review image="https://top10trendslist.com/wp-content/uploads/2021/06/Kate-Winslet.jpg" name="Kate Winslate" />
                <Review image="https://1.bp.blogspot.com/-hwlEoAm40z8/YEs81TEyv3I/AAAAAAAAw8U/K-JaM_73gRIQUXeChcLqW76RkhjcvM_tgCLcBGAsYHQ/s680/Kate-Winslet%2B%25284%2529.jpg" name="Kate Winslate" />
                <Review image="https://atlantic-technologies.com/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-17.40.55-600x400.png" name="Kane Watson" />
            </div>
            <OurPromise/>
        </div>
    );
};

export default ProductImageRight;