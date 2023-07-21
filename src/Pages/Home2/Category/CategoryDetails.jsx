import { useState } from "react";
const CategoryDetails = ({ offer, type, img1, img2, img3, img4 }) => {
  const [image, setImage] = useState(img1);

  const handleImage = (img) => {
    setImage(img);
  };
  return (
    <>
      <div className="mt-5">
        <div className="mb-3 grid grid-cols-1 md:grid-cols-2 ">
          <div className="lg:p-20 p-10 hidden md:block space-y-10 bg-primary">
            <span className="bg-blue-500 px-3 py-1 text-white rounded-full">
              {type}
            </span>
            <h1 className="text-6xl text-secondary font-semibold">{offer}</h1>
            <button className="px-8 py-3 rounded-md hover:bg-gray-800 hover:text-secondary bg-secondary duration-300 mt-10">
              Shop Now
            </button>
          </div>
          <div>
            <img src={image} alt="" className="w-full h-80 md:h-[500px] " />
          </div>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2">
          <div
            className="h-32 overflow-hidden  border border-primary rounded "
            onClick={() => handleImage(img2)}
          >
            <img
              src={img2}
              alt=""
              className="h-32 w-full hover:translate-y-[-4px] duration-300"
            />
          </div>
          <div
            className="h-32 overflow-hidden  border border-primary rounded "
            onClick={() => handleImage(img3)}
          >
            <img
              src={img3}
              alt=""
              className="h-32 w-full hover:translate-y-[-4px] duration-300"
            />
          </div>
          <div
            className="h-32 overflow-hidden  border border-primary rounded "
            onClick={() => handleImage(img4)}
          >
            <img
              src={img4}
              alt=""
              className="h-32 w-full hover:translate-y-[-4px] duration-300"
            />
          </div>
          <div
            className="h-32 overflow-hidden  border border-primary rounded "
            onClick={() => handleImage(img2)}
          >
            <img
              src={img2}
              alt=""
              className="h-32 w-full hover:translate-y-[-4px] duration-300"
            />
          </div>
          <div
            className="h-32 overflow-hidden  border border-primary rounded "
            onClick={() => handleImage(img4)}
          >
            <img
              src={img4}
              alt=""
              className="h-32 w-full hover:translate-y-[-4px] duration-300"
            />
          </div>
          <div
            className="h-32 overflow-hidden  border border-primary rounded "
            onClick={() => handleImage(img3)}
          >
            <img
              src={img3}
              alt=""
              className="h-32 w-full hover:translate-y-[-4px] duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
