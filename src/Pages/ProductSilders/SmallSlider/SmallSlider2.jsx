import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import Card2 from "../../../Components/Card/Card2";

const SmallSlider2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const slider = React.useRef(null);
  return (
    <div className="relative">
      <button onClick={() => slider?.current?.slickNext()}>
        <IoIosArrowDropright className="  absolute top-1/2 right-[0] lg:right-[-25px]  z-10 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primary hover:text-white transition ease-in-out delay-150  " />
      </button>
      <button onClick={() => slider?.current?.slickPrev()}>
        <IoIosArrowDropleft className="absolute top-1/2 left-[0] lg:left-[-25px] z-20 h-[50px] w-[50px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primary hover:text-white transition ease-in-out delay-150" />
      </button>
      <Slider ref={slider} {...settings}>
        <div className="">
          <Card2
            img="https://i.ibb.co/6v8g8sg/bright-cozy-stylish-interior-bedroom-beautiful-rich-antique-furniture-four-poster-bed.jpg"
            name="Two bed"
            price="4000"
            sku="A-780"
            oldPrice="4200"
          />
        </div>
        <div className=" ">
          <Card2
            img="https://hips.hearstapps.com/hmg-prod/images/james-farmer-dining-room-1604065999.jpg"
            name="Family Table"
            price="45000"
            sku="A-789"
            oldPrice="4900"
          />
        </div>
        <div className=" ">
          <Card2
            img="https://imgmedia.lbb.in/media/2021/02/6028fdd22bea65187ce64b42_1613299154886.jpg"
            name="Jhorna Light"
            price="1200"
            sku="A-340"
            oldPrice="1500"
          />
        </div>
        <div className=" ">
          <Card2
            img="https://imgmedia.lbb.in/media/2021/02/6028fdd22bea65187ce64b42_1613299154886.jpg"
            name="Jhorna Light"
            price="1200"
            sku="A-340"
            oldPrice="1500"
          />
        </div>
        <div className=" ">
          <Card2
            img="https://hips.hearstapps.com/hmg-prod/images/james-farmer-dining-room-1604065999.jpg"
            name="Family Table"
            price="45000"
            sku="A-789"
            oldPrice="4900"
          />
        </div>

        <div className=" ">
          <Card2
            img="https://i.ibb.co/6v8g8sg/bright-cozy-stylish-interior-bedroom-beautiful-rich-antique-furniture-four-poster-bed.jpg"
            name="Two bed"
            price="4000"
            sku="A-780"
            oldPrice="4200"
          />
        </div>
        <div className=" ">
          <Card2
            img="https://i.ibb.co/6v8g8sg/bright-cozy-stylish-interior-bedroom-beautiful-rich-antique-furniture-four-poster-bed.jpg"
            name="Two bed"
            price="4000"
            sku="A-780"
            oldPrice="4200"
          />
        </div>
        <div className=" ">
          <Card2
            img="https://hips.hearstapps.com/hmg-prod/images/james-farmer-dining-room-1604065999.jpg"
            name="Family Table"
            price="45000"
            sku="A-789"
            oldPrice="4900"
          />
        </div>
        <div className=" ">
          <Card2
            img="https://imgmedia.lbb.in/media/2021/02/6028fdd22bea65187ce64b42_1613299154886.jpg"
            name="Jhorna Light"
            price="1200"
            sku="A-340"
            oldPrice="1500"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SmallSlider2;
