// import React from 'react';

import Marquee from "react-fast-marquee";
import Banner2 from "./Banner/Banner2";
import GetOrganized from "./GetOrganized/GetOrganized";
import Category from "./Category/Category";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import Testimonial from "./Testimonial/Testimonial";
import Promises from "./Promises/Promises";
import TopSale from "../../Components/TopSale/TopSale";
import LimitedOffer from "../../Components/LimitedOffer/LimitedOffer";

const Home2 = () => {
  return (
    <div>
      {/* <Marquee className="">
        <p className="py-2 font-semibold text-primary text-lg">
          Exclusive limited-time offer: Upgrade your living space with our
          stylish and versatile furniture collection, designed to enhance
          comfort and elevate your home decor.
        </p>
      </Marquee> */}
      <div className="space-y-24">
        <Banner2 />
        <GetOrganized />
        <Category />
        <div className="max-w-screen-2xl mx-auto">
          <LimitedOffer />
          <ProductSlider />
        </div>
        <Testimonial />
        <div className="max-w-screen-xl mx-auto">
          <TopSale />
        </div>
        <Promises />
      </div>
    </div>
  );
};

export default Home2;
