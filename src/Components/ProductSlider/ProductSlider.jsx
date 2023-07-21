import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import Card from "../Card/Card";
import { BiRightArrow } from "react-icons/bi";
import bed1 from '../../assets/ProductImage/bed1.jpg'
import sofa1 from '../../assets/ProductImage/sofa1.jpg'
import sofa4 from '../../assets/ProductImage/sofa4.jpg'
import dining1 from '../../assets/ProductImage/dining1.jpg'
import light1 from '../../assets/ProductImage/light1.jpg'

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "0 20px",
          centerMargin: " 20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "0 20px",
          centerMargin: " 20px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "110px",
        },
      },
    ],
  };
  const slider = React.useRef(null);
  return (
    <>
      <div className="relative mt-4 lg:mt-10 p-3">
        <h1 className="text-3xl font-semibold text-primary mt-10">Product </h1>
        <button onClick={() => slider?.current?.slickNext()}>
          <IoIosArrowDropright className="  absolute top-[300px] right-[0] lg:right-0  z-10 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primary hover:text-white transition ease-in-out delay-150  " />
        </button>
        <button onClick={() => slider?.current?.slickPrev()}>
          <IoIosArrowDropleft className="absolute top-[300px] left-[0] lg:left-0 z-20 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primary hover:text-white transition ease-in-out delay-150" />
        </button>
      </div>
      <Slider ref={slider} {...settings}>
        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img={sofa1}
            name="Two bed"
            price="4000"
            sku="A-780"
            oldPrice="4200"
          />
        </div>
        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img={bed1}
            name="Family Table"
            price="45000"
            sku="A-789"
            oldPrice="4900"
          />
        </div>
        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img={dining1}
            name="Jhorna Light"
            price="1200"
            sku="A-340"
            oldPrice="1500"
          />
        </div>
        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img={light1}
            name="Jhorna Light"
            price="1200"
            sku="A-340"
            oldPrice="1500"
          />
        </div>
        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img="https://i.ibb.co/yYKXs5c/20230528142004-fpdl-in-blue-sofa-contemporary-living-room-sofas-have-clipping-paths-410516-3690-larg.jpg"
            name="Family Table"
            price="45000"
            sku="A-789"
            oldPrice="4900"
          />
        </div>

        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img={sofa4}
            name="Two bed"
            price="4000"
            sku="A-780"
            oldPrice="4200"
          />
        </div>
        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img={bed1}
            name="Two bed"
            price="4000"
            sku="A-780"
            oldPrice="4200"
          />
        </div>
        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img={light1}
            name="Family Table"
            price="45000"
            sku="A-789"
            oldPrice="4900"
          />
        </div>
        <div className=" px-2 !flex flex-col mx-auto justify-center items-center">
          <Card
            img={sofa1}
            name="Jhorna Light"
            price="1200"
            sku="A-340"
            oldPrice="1500"
          />
        </div>
      </Slider>
    </>
  );
};

export default ProductSlider;
