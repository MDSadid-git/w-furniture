import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../../assets/Banner/banner1.jpg";
import banner2 from "../../../assets/Banner/banner2.jpg";
import banner3 from "../../../assets/Banner/banner3.jpg";
import { Link } from "react-router-dom";

const Banner2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <>
          <div className="h-[200px] sm:h-[350px] md:h-[670px] overflow-hidden relative">
            <img className="h-full w-full" src={banner1} alt="" />
            <div className="absolute top-32 left-7 z-50 sm:top-60 sm:left-8 md:top-[28rem] md:left-20">
              <Link to="/shop">
                <button
                  type="button"
                  className="bg-primary hover:bg-gray-800 text-secondary  duration-300 px-2 py-1 md:px-6 md:py-2 rounded-md md:mt-10 mt-5 text-sm md:text-xl"
                >
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </>
        <>
          <div className="h-[200px] sm:h-[350px] md:h-[670px] overflow-hidden relative">
            <img className="h-full w-full" src={banner2} alt="" />
            <div className="absolute flex justify-center items-center z-50 top-16 md:top-32 bottom-0 left-0 right-0">
              <Link to="/shop">
                <button
                  type="button"
                  className="bg-primary hover:bg-gray-800 z-50 text-secondary  duration-300 px-2 py-1 md:px-6 md:py-2 rounded-md md:mt-10 mt-5 text-sm md:text-xl"
                >
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </>
        <>
          <div className="h-[200px] sm:h-[350px] md:h-[670px] overflow-hidden relative">
            <img className="h-full w-full" src={banner3} alt="" />
            <div className="absolute top-32 left-14 sm:top-60 sm:left-20 md:top-[27rem] md:left-48">
              <Link to="/shop">
                <button
                  type="button"
                  className="bg-primary hover:bg-gray-800 text-secondary  duration-300 px-2 py-1 md:px-8 md:py-2 rounded-md md:mt-10 mt-5 text-sm md:text-xl"
                >
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </>
      </Slider>
    </>
  );
};

export default Banner2;
