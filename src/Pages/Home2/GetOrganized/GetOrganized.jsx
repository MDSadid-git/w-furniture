import organize1 from "../../../assets/ProductImage/organize1.jpg";
import organize2 from "../../../assets/ProductImage/organize2.jpg";
import bed3 from "../../../assets/ProductImage/bed3.jpg";
const GetOrganized = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="text-center max-w-screen-md mx-auto space-y-7 text-gray-800">
        <h1 className="font-sans italic md:text-5xl text-3xl font-semibold text-primary">
          Get Organized Home
        </h1>
        <p className="font-semibold text-lg mb-10">
          Designed with the modern family in mind, designer Weeoro Furniture
          considered every aspect of the Patch table to ensure maximum
          functionality.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  md:gap-5 gap-3 mt-10">
        <div className="h-80 overflow-hidden shadow-lg">
          <img
            src={organize1}
            alt=""
            className="scale-100 hover:scale-110 duration-500 h-full w-full"
          />
        </div>
        <div className="h-80 overflow-hidden shadow-lg md:mt-20">
          <img
            src={organize2}
            alt=""
            className="scale-100 hover:scale-110 duration-500 h-full w-full"
          />
        </div>
        <div className="h-80 overflow-hidden shadow-lg">
          <img
            src={bed3}
            alt=""
            className="scale-100 hover:scale-110 duration-500 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GetOrganized;
