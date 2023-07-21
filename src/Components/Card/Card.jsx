import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Card = ({ img, price, oldPrice, sku, name }) => {
  return (
    <>
      {/* large device card design */}
      <div className=" cursor-pointer group hidden lg:block overflow-hidden relative border my-5 mx-5 rounded-md p-3">
        <img className="w-full h-60 rounded-t-md" src={img} alt="" />
        <p className="font-semibold absolute z-10 group-hover:text-white duration-300 top-4 right-5 text-gray-800">
          SKU-{sku}
        </p>
        <div className="my-2 font-semibold">
          <p className="text-xl text-primary">{name}</p>
          <p className="text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
            harum.
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-semibold text-primary">${price}</p>
          <p className="line-through text-lg font-semibold text-gray-800">
            ${oldPrice}
          </p>
        </div>

        <div className="absolute  left-[-100px] top-44 md:group-hover:left-36 lg:group-hover:left-[37%] duration-500 z-10">
          <button className="p-3 rounded-full text-primary duration-300 hover:bg-gray-800 hover:text-secondary bg-secondary mr-2 text-xl">
            <AiOutlineHeart />
          </button>
          <button className="p-3 rounded-full text-primary duration-300 hover:bg-gray-800 hover:text-secondary bg-secondary mr-2 text-xl">
            <AiOutlineShoppingCart />{" "}
          </button>
        </div>
        <div className="absolute top-0 rounded-md group-hover:left-0 duration-700 left-[600px] flex justify-center items-center opacity-80 h-full w-full bg-primary"></div>
      </div>
      {/* small device card design */}
      <div className="cursor-pointer  lg:hidden relative bg-secondary my-5 mx-5 rounded-md p-3">
        <div>
          <img
            className="w-full h-60 rounded-t-md"
            src={img}
            alt=""
          />
        </div>
        <p className="font-semibold absolute top-4 right-5 text-gray-800">
          SKU-{sku}
        </p>
        <div className="my-2 font-semibold">
          <p className="text-xl text-primary">{name}</p>
          <p className="text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
            harum.
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-semibold text-primary">${price}</p>
          <p className="line-through text-lg font-semibold text-gray-800">
            ${oldPrice}
          </p>
        </div>
        <div className="flex mt-3">
          <button className="p-3 rounded-full text-secondary bg-primary hover:bg-gray-800  duration-300 mr-1 text-xl">
            <AiOutlineHeart />
          </button>
          <button className="flex justify-between bg-primary hover:bg-gray-800  duration-300 items-center text-secondary px-5 py-1 rounded-full w-full text-sm font-semibold">
            <span className="text-xl">
              <AiOutlineShoppingCart />
            </span>
            Add To Card
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
