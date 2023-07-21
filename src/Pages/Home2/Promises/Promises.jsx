import { FiAward } from "react-icons/fi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { GiStarGate } from "react-icons/gi";

const Promises = () => {
  return (
    <div>
      <div className="text-center max-w-screen-md mx-auto space-y-7 text-gray-800">
        <h1 className="font-sans italic text-4xl font-semibold text-primary">
          Our Promises
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-10 container mx-auto px-2">
        <div className="flex items-center space-x-3 group cursor-pointer border py-7 px-3 bg-secondary rounded-md hover:bg-primary duration-300 hover:text-secondary shadow-md">
          <span className="text-6xl duration-300 group-hover:translate-x-2 text-gray-800 group-hover:text-secondary">
            <FiAward />
          </span>
          <div>
            <h1 className="uppercase font-semibold text-primary group-hover:text-secondary">
              Exceptional Services
            </h1>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit..
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 group cursor-pointer border py-7 px-3 bg-secondary rounded-md hover:bg-primary duration-300 hover:text-secondary shadow-md">
          <span className="text-6xl duration-300 group-hover:translate-x-2 text-gray-800 group-hover:text-secondary">
            <MdOutlinePriceCheck />
          </span>
          <div>
            <h1 className="uppercase font-semibold text-primary group-hover:text-secondary">
              {" "}
              Best Price
            </h1>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit..
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 group cursor-pointer border py-7 px-3 bg-secondary rounded-md hover:bg-primary duration-300 hover:text-secondary shadow-md">
          <span className="text-6xl duration-300 group-hover:translate-x-2 text-gray-800 group-hover:text-secondary">
            <BsTruck />
          </span>
          <div>
            <h1 className="uppercase font-semibold text-primary group-hover:text-secondary">
              Fast Delivery
            </h1>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit..
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 group cursor-pointer border py-7 px-3 bg-secondary rounded-md hover:bg-primary duration-300 hover:text-secondary shadow-md">
          <span className="text-6xl duration-300 group-hover:translate-x-2 text-gray-800 group-hover:text-secondary">
            <GiStarGate />
          </span>
          <div>
            <h1 className="uppercase font-semibold text-primary group-hover:text-secondary">
              Our Guarantee
            </h1>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promises;
