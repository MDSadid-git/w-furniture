import organize1 from "../../assets/ProductImage/organize1.jpg";
import organize2 from "../../assets/ProductImage/organize2.jpg";

const GetOrganized = () => {
  return (
    <div className="my-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
      <div className="h-[450px] order-3 lg:order-1 lg:translate-y-10 lg:hover:-translate-y-0 border duration-500 cursor-pointer ">
        <img className="h-full w-full" src={organize2} alt="" />
      </div>
      <div className="h-[450px] order-2 border lg:-translate-y-6 lg:hover:-translate-y-12  duration-500 cursor-pointer">
        <img className="h-full w-full" src={organize1} alt="" />
      </div>
      <div className="flex justify-center items-center ml-5 order-1 lg:order-3">
        <div>
          <h1 className="text-4xl font-semibold my-5 text-gray-800">
            Get Organized
          </h1>
          <p className="font-semibold my-5  text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, esse.
          </p>
          <button className="bg-primary text-secondary text-xl py-2 px-3 rounded-md font-semibold hover:bg-gray-800 duration-300">
            Shop Organized for Every Furniture
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetOrganized;
