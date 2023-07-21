import React from 'react';
import GalaryImage from '../../Components/GallaryImage/GalaryImage';
import bed2 from '../../assets/ProductImage/bed2.jpg'
import bed3 from '../../assets/ProductImage/bed3.jpg'
import bed4 from '../../assets/ProductImage/bed4.jpg'
import sofa2 from '../../assets/ProductImage/sofa2.jpg'
import sofa3 from '../../assets/ProductImage/sofa3.jpg'
import sofa4 from '../../assets/ProductImage/sofa4.jpg'
import light2 from '../../assets/ProductImage/light2.jpg'
import light3 from '../../assets/ProductImage/light3.jpg'
import light4 from '../../assets/ProductImage/light4.jpg'
import dining2 from '../../assets/ProductImage/dining2.jpg'
import dining3 from '../../assets/ProductImage/dining3.jpg'
import dining4 from '../../assets/ProductImage/dining4.jpg'
import post from '../../assets/ProductImage/post.jpg'

const BlogPostGallery = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <img src={post} alt="" />
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            <GalaryImage image={sofa2} name="Office chair" />
            <GalaryImage image={bed2} />
            <GalaryImage image={dining2} name="Almari" />
            <GalaryImage image={light2} name="Two Bed" />
            <GalaryImage image={sofa3} name="Office chair" />
            <GalaryImage image={bed3} name="Almari" />
            <GalaryImage image={dining3} name="Roking chair" />
            <GalaryImage image={light3} name="Almari" />
            <GalaryImage image={sofa4} name="Two Bed" />
            <GalaryImage image={bed4} name="Office chair" />
            <GalaryImage image={dining4} name="Almari" />
            <GalaryImage image={light4} name="Roking chair" />
            <GalaryImage image={sofa3} name="Almari" />
            <GalaryImage image={bed3} name="Two Bed" />
            <GalaryImage image={dining3} name="Two Bed" />
            <GalaryImage image={light3} name="Office chair" />
            <GalaryImage image={sofa4} name="Office chair" />
            <GalaryImage image={dining2} name="Almari" />
           </div>
        </div>
    );
};

export default BlogPostGallery;