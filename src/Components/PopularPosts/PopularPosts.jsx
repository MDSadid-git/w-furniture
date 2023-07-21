import React from 'react';
import sofa4 from '../../assets/ProductImage/sofa4.jpg'
import bed4 from '../../assets/ProductImage/bed4.jpg'
import dining4 from '../../assets/ProductImage/dining4.jpg'
import light4 from '../../assets/ProductImage/light4.jpg'

const PopularPosts = ({ title }) => {
    return (
        <div className="shadow-lg px-3 my-10">
            <h1 className="font-semibold text-2xl my-5 text-primary">Popular Posts</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center group mt-5 p-3 border-t hover:shadow-lg cursor-pointer duration-300 ">
                <img
                    className="w-full lg:w-24 lg:h-24 rounded mr-4"
                    src={light4}
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
                    src={bed4}
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
                    src={sofa4}
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
                    src={bed4}
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
                    src={sofa4}
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
    );
};

export default PopularPosts;