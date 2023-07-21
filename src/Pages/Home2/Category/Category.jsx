import { useState } from "react";
import CategoryDetails from "./CategoryDetails";
import bed1 from '../../../assets/ProductImage/bed1.jpg'
import bed2 from '../../../assets/ProductImage/bed2.jpg'
import bed3 from '../../../assets/ProductImage/bed3.jpg'
import bed4 from '../../../assets/ProductImage/bed4.jpg'
import sofa1 from '../../../assets/ProductImage/sofa1.jpg'
import sofa2 from '../../../assets/ProductImage/sofa2.jpg'
import sofa3 from '../../../assets/ProductImage/sofa3.jpg'
import sofa4 from '../../../assets/ProductImage/sofa4.jpg'
import light1 from '../../../assets/ProductImage/light1.jpg'
import light2 from '../../../assets/ProductImage/light2.jpg'
import light3 from '../../../assets/ProductImage/light3.jpg'
import light4 from '../../../assets/ProductImage/light4.jpg'
import dining1 from '../../../assets/ProductImage/dining1.jpg'
import dining2 from '../../../assets/ProductImage/dining2.jpg'
import dining3 from '../../../assets/ProductImage/dining3.jpg'
import dining4 from '../../../assets/ProductImage/dining4.jpg'

const Category = () => {
  const [living, setLiving] = useState(true);
  const [bed, setBed] = useState(false);
  const [dining, setDining] = useState(false);
  const [light, setLight] = useState(false);

  const handleLiving = () => {
    setLiving(true);
    setBed(false);
    setDining(false);
    setLight(false);
  };
  const handleBed = () => {
    setLiving(false);
    setBed(true);
    setDining(false);
    setLight(false);
  };
  const handleDining = () => {
    setLiving(false);
    setBed(false);
    setDining(true);
    setLight(false);
  };
  const handleLight = () => {
    setLiving(false);
    setBed(false);
    setDining(false);
    setLight(true);
  };
  return (
    <div className="container mx-auto px-3">
      <div className="text-center max-w-screen-md mx-auto space-y-7 text-gray-800">
        <h1 className="font-sans italic text-4xl font-semibold text-primary">
          Our Categories
        </h1>
      </div>
      <div className="mt-10 ">
        <div className="max-w-screen-lg mx-auto">
          <ul className="flex justify-between md:text-2xl lg:text-4xl font-bold text-gray-800 ">
            <li
              className={`${
                living && "border-b-4 border-primary"
              } cursor-pointer`}
              onClick={handleLiving}
            >
              LIVING ROOMS
            </li>
            <li
              className={`${bed && "border-b-4 border-primary"} cursor-pointer`}
              onClick={handleBed}
            >
              BED ROOMS
            </li>
            <li
              className={`${
                dining && "border-b-4 border-primary"
              } cursor-pointer`}
              onClick={handleDining}
            >
              DINING ROOMS
            </li>
            <li
              className={`${
                light && "border-b-4 border-primary"
              } cursor-pointer`}
              onClick={handleLight}
            >
              LIGHTS
            </li>
          </ul>
        </div>
        <div>
          {living && (
            <CategoryDetails
              type="New Arrivals"
              offer="15% Off Weero Living Rooms"
              img1={sofa4} 
                img2={sofa3} 
                img3={sofa2} 
                img4={sofa1}
            />
          )}
        </div>
        <div>
          {bed && (
            <CategoryDetails
              type="Top Selling"
              offer="10% Off Weero Bed Rooms"
              img1={bed4}
                    img2={bed3}
                    img3={bed2} 
                    img4={bed1}
            />
          )}
        </div>
        <div>
          {dining && (
            <CategoryDetails
              type="New Arrivals"
              offer="20% Off on Weero Dining Rooms"
              heading="Dining Room"
              img1={dining4}
                    img2={dining3}
                    img3={dining2} 
                    img4={dining1}
            />
          )}
        </div>
        <div>
          {light && (
            <CategoryDetails
              type="Top Selling"
              offer="20% Off Weero Lights"
              img1={light4}
                    img2={light3}
                    img3={light2} 
                    img4={light1}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
