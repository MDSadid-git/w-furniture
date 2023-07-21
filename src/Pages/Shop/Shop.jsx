import React, { useState } from 'react';
import RightSidebar from '../../Components/RightSidebar/RightSidebar';
import ProductFilter from '../../Components/ProductFilter/ProductFilter';
import { Link } from 'react-router-dom';
import ShopProduct from '../../Components/ShopContent/ShopProduct';
import ReactSlider from 'react-slider';
import sofa2 from '../../assets/ProductImage/sofa2.jpg'
import sofa3 from '../../assets/ProductImage/sofa3.jpg'



const Shop = () => {
    let [show, setShow] = useState(12);
    let handelShowNubmer = (e) => {
        console.log(+e.target.value);
        setShow(+e.target.value);
    };
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    return (
        <div className='max-w-screen-xl mx-auto p-3 md:p-0'>
            <div className=" mt-12 flex flex-col-reverse  lg:flex-row gap-x-12">

                <div className="lg:w-[75%] w-full">
                    <div className="mb-16 border py-2 flex items-center justify-between p-2 gap-3 ">
                        <ProductFilter title="Sort by:">
                            <option selected>Name</option>
                            <option value="US">Dining Room</option>
                            <option value="US">Living Room</option>
                            <option value="US">Chair</option>
                            <option value="US">Table</option>
                        </ProductFilter>
                        <ProductFilter onChange={handelShowNubmer} title="Show:">
                            <option selected>12</option>
                            <option>24</option>
                            <option>48</option>
                        </ProductFilter>
                    </div>

                    <ShopProduct />
                </div>
                <div className="lg:w-[25%] w-full h-[full] bg-white px-2">
                    <RightSidebar />
                    <h1 className="font-dm text-xl font-medium my-2 mb-2">
                        Filter By Price
                    </h1>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={[0, 100]}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={10}
                    />

                    <div className="flex mt-4 justify-between mb-3">
                        <div className="px-6 py-2 border hover:bg-primary hover:text-white cursor-pointer duration-300 rounded">
                            Filter
                        </div>
                        <div className="px-6 py-2 border hover:bg-primary hover:text-white cursor-pointer duration-300 rounded">
                            Price: $0 — $120
                        </div>
                    </div>
                    <Link to="#">
                        <img
                            className="mt-5 lg:mt-20 w-full"
                            src={sofa2}
                        />
                    </Link>
                    <Link to="#">
                        <img
                            className="mt-5 lg:mt-20 w-full"
                            src={sofa3}
                        />
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Shop;