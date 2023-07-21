import { AiFillStar } from "react-icons/ai";

const OneSlideCard = ({ image, title, sku, details, price }) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 pl-2">
        <div>
          <img className="lg:h-[440px] h-[220px] w-full" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-center bg-primary lg:bg-transparent pl-5 pr-2 py-4">
          <div className="text-secondary space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="text-xl uppercase">{title}</h1>
              <p className="font-semibold text-md">SKU-{sku}</p>
            </div>
            <p>{details}</p>
            <p>Price: {price}</p>
            <div className="flex ">
              <AiFillStar className="text-yellow-300 text-2xl" />
              <AiFillStar className="text-yellow-300 text-2xl" />
              <AiFillStar className="text-yellow-300 text-2xl" />
              <AiFillStar className="text-yellow-300 text-2xl" />
              <AiFillStar className="text-secondary text-2xl" />
            </div>
            <button className="px-8 py-2 rounded-md hover:text-primary transition bg-secondary text-black">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneSlideCard;
