import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/Banner/190.jpg";
import slide2 from "../../assets/Banner/191.jpg";
import slide3 from "../../assets/Banner/193.jpg";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    zoompan: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {/* banner 1 */}
        <div>
          <div className="relative">
            <img
              src={slide1}
              alt=""
              className="h-96 lg:h-[670px] w-full  animate-zoom-out1 "
            />
            <div className="absolute z-40 top-[10%] md:top-[20%] left-[5%]">
              <div className="inline-block">
                <h1 className="text-center text-2xl lg:text-4xl font-poppins font- uppercase">
                  W
                </h1>
                <h1 className="text-primary mt-3 font-poppins text-2xl md:text-4xl lg:text-6xl font-bold px-8 py-2 rounded-full border border-gray-800">
                  FURNITURE
                </h1>
              </div>
              <p className="w-1/2 my-2 md:my-5 hidden lg:block">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque distinctio, cum molestiae, error nesciunt numquam
                saepe maxime porro, in eum provident quod?
              </p>
              <p className="w-1/2 my-2 md:my-5 lg:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                minus aut placeat.
              </p>
              <div className="flex">
                <Link to="/shop">
                  <button
                    type="button"
                    className="bg-primary hover:bg-gray-800 text-secondary  duration-300 px-2 py-1 md:px-6 md:py-2 rounded-md flex mt-5 text-sm md:text-xl"
                  >
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* banner 2 */}
        <div>
          <div className="relative">
            <img
              src={slide3}
              alt=""
              className="h-96 lg:h-[670px] w-full  animate-zoom-out1"
            />
            <div className="absolute z-50 top-0  bottom-0 right-[6%] flex justify-end items-center">
              <div>
                <h1 className="uppercase font-poppins font-semibold md:text-xl lg:text-2xl text-center mb-3">
                  Sale Up to
                </h1>
                <div className="flex  items-center border-primary border-2 -skew-x-12 px-2 lg:px-6 py-1">
                  <h1 className="font-poppins font-extrabold md:text-6xl lg:text-9xl text-4xl">
                    70
                  </h1>
                  <p className="flex flex-col text-xl lg:text-3xl font-poppins font-extrabold pl-2">
                    % <span>OFF</span>
                  </p>
                </div>
                <h1 className=" font-poppins font-semibold uppercase md:text-xl lg:text-3xl text-center mt-3">
                  limited offer
                </h1>
                <div className="flex justify-center">
                  <Link to="/shop">
                    <button
                      type="button"
                      className="bg-primary hover:bg-gray-800 text-secondary  duration-300 px-2 py-1 md:px-6 md:py-2 rounded-md flex mt-5 text-sm md:text-xl"
                    >
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* banner 3 */}
        <div>
          <div className="relative">
            <div>
              <img
                src={slide2}
                alt=""
                className="h-96 lg:h-[670px] w-full animate-zoom-out1"
              />
              <div className="absolute z-30 top-0  bottom-0 right-[6%] flex justify-end items-center">
                <div>
                  <div className="text-end">
                    <h1 className="uppercase tracking-widest font-dancing font-semibold md:text-xl lg:text-2xl  mb-3">
                      New Arrivals
                    </h1>
                    <h1 className="text-primary tracking-widest lg:text-5xl font-bold font-basker uppercase mt-1">
                      furniture
                    </h1>
                    <h1 className="text-primary tracking-widest lg:text-5xl font-bold font-basker uppercase text-end mt-1">
                      sale
                    </h1>
                  </div>
                  <h1 className="text-end text-xsssss lg:text-lg  my-2">
                    Lorem ipsum dolor sit, amet <br /> consectetur Wadipisicing
                    elit. <br /> Temporibus, rerum.
                  </h1>
                  <div className="flex justify-end">
                    <Link to="/shop">
                      <button
                        type="button"
                        className="bg-primary hover:bg-gray-800 text-secondary  duration-300 px-2 py-1 md:px-6 md:py-2 rounded-md flex mt-5 text-sm md:text-xl"
                      >
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
