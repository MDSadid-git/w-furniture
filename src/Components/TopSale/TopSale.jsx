import React from "react";
import Card2 from "../Card/Card2";
import { Link } from "react-router-dom";
import sofa2 from '../../assets/ProductImage/sofa2.jpg'
import bed2 from '../../assets/ProductImage/bed2.jpg'
import light3 from '../../assets/ProductImage/light3.jpg'
import dining2 from '../../assets/ProductImage/dining2.jpg'
import sofa3 from '../../assets/ProductImage/sofa3.jpg'
import dining4 from '../../assets/ProductImage/dining4.jpg'

const TopSale = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary my-10">
        Top Sale Product
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card2
          img={sofa2}
          name="Two bed"
          price="3500"
          sku="A-9810"
          oldPrice="4200"
        />
        <Card2
          img={bed2}
          name="Two bed"
          price="3800"
          sku="A-270"
          oldPrice="4100"
        />
        <Card2
          img={dining2}
          name="Almari"
          price="6300"
          sku="A-380"
          oldPrice="6900"
        />
        <Card2
          img={light3}
          name="Almari"
          price="6000"
          sku="A-381"
          oldPrice="6500"
        />
        <Card2
          img={dining4}
          name="Roking Chair"
          price="2000"
          sku="A-330"
          oldPrice="2200"
        />
        <Card2
          img={sofa3}
          name="Office Chair"
          price="2200"
          sku="A-410"
          oldPrice="2400"
        />
      </div>
      <div className="flex justify-center">
        <Link to="/shop">
          <button className="bg-primary hover:bg-gray-800 duration-300 px-5 py-2 text-secondary rounded-md">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSale;
