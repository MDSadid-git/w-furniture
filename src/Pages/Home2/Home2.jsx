// import React from 'react';
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
