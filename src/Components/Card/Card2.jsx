import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";

const Card2 = ({ img, price, oldPrice, sku, name }) => {
  return (
    <>
      {/* large device card design */}
      <div className=" cursor-pointer group hidden lg:block overflow-hidden relative bg-secondary my-5 mx-5 rounded-md p-3">
        <img className="w-full h-60 rounded-t-md" src={img} alt="" />
        <div className="absolute top-0 rounded-md group-hover:left-0 duration-700 left-0   -translate-y-72 -translate-x-full group-hover:-translate-x-64 group-hover:-translate-y-64 rotate-45 flex justify-start items-center h-full w-full bg-primary"></div>
        <p className="font-semibold absolute z-10 group-hover:text-white duration-300 top-4 left-5 text-white">
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

        <div className="absolute  right-[-100px] bottom-2 md:group-hover:right-0 lg:group-hover:right-0 duration-500 z-10">
          {/* <button className='p-3 rounded-full text-primary duration-300 hover:bg-gray-800 hover:text-secondary bg-secondary mr-2 text-4xl'><AiOutlineShoppingCart /> </button> */}
        </div>
        <div className="flex ">
          <AiFillStar className="text-yellow-500 text-2xl" />
          <AiFillStar className="text-yellow-500 text-2xl" />
          <AiFillStar className="text-yellow-500 text-2xl" />
          <AiFillStar className="text-yellow-500 text-2xl" />
          <AiFillStar className="text-yellow-500 text-2xl" />
        </div>
        <div className="absolute top-0 rounded-md group-hover:left-0 duration-700 left-0   translate-y-72 translate-x-full group-hover:translate-x-64 group-hover:translate-y-64 rotate-45 flex justify-start items-center h-full w-full bg-primary">
          <button className="p-3 rounded-full text-primary duration-300 hover:bg-gray-800 hover:text-secondary bg-secondary ml-5 mt-3 text-3xl -rotate-45">
            <AiOutlineShoppingCart />{" "}
          </button>
        </div>
      </div>
      {/* small device card design */}
      <div className="cursor-pointer relative  lg:hidden bg-secondary my-5 mx-5 rounded-md p-3">
       <div>
       <img className="w-full h-60 rounded-t-md" src={img} alt="" />
       </div>
        <p className="font-semibold absolute top-4 right-5 text-white">
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
        <div className="flex justify-between mt-3">
          <button className="inline-flex space-x-2  bg-primary hover:bg-gray-800 duration-300 items-center text-secondary px-5 py-1 rounded-full  text-sm font-semibold">
            <span className="text-xl">
              <AiOutlineShoppingCart />
            </span>
            <p>Add To Card</p>
          </button>
          <button className="p-3 rounded-full text-secondary bg-primary hover:bg-gray-800 duration-300 mr-1 text-xl">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card2;
