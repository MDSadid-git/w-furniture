import { BsChatQuote } from "react-icons/bs";
import Slider from "react-slick";
import testmonial from '../../../assets/ProductImage/testmonial.jpg'
import  './Testimonial.css'
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <div className="testmonial grid grid-cols-1 md:grid-cols-2 bg-primary py-16 px-10 gap-5 max-w-screen-2xl mx-auto">
        <div>
          <img
            src={testmonial}
            alt=""
            className="rounded shadow-xl"
          />
        </div>

        <Slider {...settings}>
          <div className="text-center">
            <div className="text-secondary flex flex-col items-center justify-center">
              <div>
                <h1 className="text-5xl mt-5 mb-5 lg:mt-20 lg:mb-20 md:mt-10 md:mb-10">
                  <BsChatQuote />
                </h1>
              </div>
              <div className="">
                <p className=" text-xl">
                  “At Weero Furniture, we take responsibility for our operations
                  and reflect on the choices we make and how our priorities
                  affect the wellbeing of people.”
                </p>
              </div>
              <div className="lg:mt-20 md:mt-10 mt-5">
                <h3 className="font-semibold">Designer</h3>
                <h3 className="font-semibold">Josh Butler</h3>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-secondary flex flex-col items-center justify-center">
              <div>
                <h1 className="text-5xl mt-5 mb-5 lg:mt-20 lg:mb-20 md:mt-10 md:mb-10">
                  <BsChatQuote />
                </h1>
              </div>
              <div className="">
                <p className=" text-xl">
                  “A set of architectural wall shelves really do the trick when
                  it comes to organizing and displaying your stuff. I especially
                  love these sturdy wood ones by Burrow.”
                </p>
              </div>
              <div className="lg:mt-20 md:mt-10 mt-5">
                <h3 className="font-semibold">Designer</h3>
                <h3 className="font-semibold">Tin burg</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
