import React, { useState } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiFillStar,
} from "react-icons/ai";
import image1 from '../../assets/ProductImage/image1.jpg'
import image2 from '../../assets/ProductImage/image2.jpg'
import image3 from '../../assets/ProductImage/image3.jpg'
import image4 from '../../assets/ProductImage/image4.jpg'

const DetailsSection = () => {
  const [quantity, setQuantity] = useState(1);
  let price = 2100;
  const totalPrice = price * quantity;

  const quantityPlus = () => {
    setQuantity(quantity + 1);
  };
  const quantityMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price * quantity);
    }
  };
  const images = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    
    {
      img: image3,
    },
    {
      img: image4,
    },
  ];

  const [largeImage, setLargeImage] = useState(images[0].img);

  return (
    <div className="flex justify-center bg-secondary mt-5 flex-col lg:flex-row max-w-screen-xl mx-auto p-3 border-2">
      <div className="flex lg:w-3/5">
        <div className="h-60 sm:h-96 lg:h-[650px] w-full">
          <img src={largeImage} className="w-full h-full" alt="" />
        </div>
        <div className=" flex flex-col ml-4 overflow-hidden">
          {images.map((image) => (
            <img
              key={image.img}
              src={image.img}
              className="lg:w-28 lg:h-24 w-12 h-12 sm:h-20 sm:w-20 hover:scale-110 lg:mt-10 mt-2 border p-2 cursor-pointer hover:border hover:border-primary bg-white"
              alt=""
              onClick={() => setLargeImage(image.img)}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-2/5 p-5">
        <h1 className="text-3xl font-semibold my-5 text-primary">Showcase</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          veritatis iusto quasi? Doloribus ab dolore nihil odio? Voluptatum
          veniam, quae accusantium ea, doloribus temporibus quos sapiente
          architecto alias, suscipit minima!
        </p>
        <div className="mt-3">
          <h1 className="mt-3">
            <span className="font-semibold">Usable material:-</span>Imported oak
            wood, 18 mm & 15mm process wood & environment-friendly lacquer.
          </h1>
          <h1 className="mt-3">
            <span className="font-semibold">Regular size:-</span> 49" x 24" x
            70"
          </h1>
          <h1 className="mt-3">
            <span className="font-semibold">
              Usable size/outer/inner size:-
            </span>
          </h1>
          <p>O : 49" x 24" x 70"</p>
          <p> I : 45" x 22" x 67"</p>
          <h1 className="mt-3">
            <span className="font-semibold">Design pattern:-</span> 2D design
            pattern
          </h1>
          <h1 className="mt-3">
            <span className="font-semibold">Color pattern:-</span> Light
          </h1>
        </div>
        <p className="font-semibold my-5 flex justify-between">
          Price: <span>$ {totalPrice}</span>
        </p>

        <div className="flex justify-between">
          <p className="mr-4 font-semibold">Quantity :</p>
          <div className="flex justify-between">
            <button
              className="text-3xl font-semibold mr-4 text-red-500"
              onClick={quantityMinus}
            >
              <AiOutlineMinusCircle />
            </button>
            <p className="font-semibold text-xl mx-2">{quantity}</p>
            <button
              className="text-3xl font-semibold ml-4 text-primary"
              onClick={quantityPlus}
            >
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button className="px-5 py-2 border bg-gray-800 text-white rounded">
            Add to card
          </button>
          <button className="px-5 py-2 border bg-primary text-white rounded">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
