import { BsTelephone } from "react-icons/bs";
import banner from "../../../assets/cover.jpg";
import banner1 from "../../../assets/Banner/slider5.jpg";
import banner2 from "../../../assets/Banner/slide3.jpg";
import Slider from "react-slick";

const ProductBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {/* banner 1 */}
        <div className="relative">
          <img
            src={banner}
            alt=""
            className="w-full h-[300px] md:h-[450px] lg:h-[550px]"
          />
          <div className="absolute bottom-10 right-20 md:right-40 flex items-center justify-center space-x-5">
            <button
              type="button"
              className="hover:bg-primary hover:text-secondary bg-secondary text-primary duration-300 px-6 py-2 rounded-md  md:text-xl"
            >
              Order Now
            </button>
            <div className=" text-xs md:text-xl flex items-center">
              <div className="bg-primary rounded-full p-2 mr-2 ">
                <BsTelephone />
              </div>
              <span className="text-secondary">+880 171 095595</span>
            </div>
          </div>
        </div>
        {/* banner 2 */}
        <div className="relative">
          <img
            src={banner1}
            alt=""
            className="w-full h-[300px] md:h-[450px] lg:h-[550px]"
          />
          <div className="absolute bottom-10 right-20 md:right-40 flex items-center justify-center space-x-5">
            <button
              type="button"
              className="hover:bg-primary hover:text-secondary bg-secondary text-primary duration-300 px-6 py-2 rounded-md  md:text-xl"
            >
              Order Now
            </button>
            <div className=" text-xs md:text-xl flex items-center">
              <div className="bg-primary rounded-full p-2 mr-2 ">
                <BsTelephone />
              </div>
              <span className="text-secondary">+880 171 095595</span>
            </div>
          </div>
        </div>
        {/* banner 3 */}
        <div className="relative">
          <div>
            <img src={banner2} alt="" className="h-96 lg:h-[550px] w-full" />
            <div className="absolute top-2 left-7 md:left-14 lg:left-28 w-1/3 z-20">
              <h1 className="text-secondary md:text-2xl lg:text-3xl">
                Simple and Modern
              </h1>
              <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl mt-2">
                Furniture
              </h1>
              <p className="text-white mt-5 text-xs md:text-base w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore perferendis, debitis sequi cumque
              </p>
            </div>
          </div>
          <div className="absolute bottom-10 right-20 md:right-40 flex items-center justify-center space-x-5">
            <button
              type="button"
              className="hover:bg-primary hover:text-secondary bg-secondary text-primary duration-300 px-6 py-2 rounded-md  md:text-xl"
            >
              Order Now
            </button>
            <div className=" text-xs md:text-xl flex items-center">
              <div className="bg-primary rounded-full p-2 mr-2 ">
                <BsTelephone />
              </div>
              <span className="text-secondary">+880 171 095595</span>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default ProductBanner;
