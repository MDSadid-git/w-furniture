import { useState } from "react";
import CetegorySection1 from "./CetegorySection1";
import bed1 from "../../assets/ProductImage/bed1.jpg";
import bed2 from "../../assets/ProductImage/bed2.jpg";
import bed3 from "../../assets/ProductImage/bed3.jpg";
import bed4 from "../../assets/ProductImage/bed4.jpg";
import sofa1 from "../../assets/ProductImage/sofa1.jpg";
import sofa2 from "../../assets/ProductImage/sofa2.jpg";
import sofa3 from "../../assets/ProductImage/sofa3.jpg";
import sofa4 from "../../assets/ProductImage/sofa4.jpg";
import light1 from "../../assets/ProductImage/light1.jpg";
import light2 from "../../assets/ProductImage/light2.jpg";
import light3 from "../../assets/ProductImage/light3.jpg";
import light4 from "../../assets/ProductImage/light4.jpg";
import dining1 from "../../assets/ProductImage/dining1.jpg";
import dining2 from "../../assets/ProductImage/dining2.jpg";
import dining3 from "../../assets/ProductImage/dining3.jpg";
import dining4 from "../../assets/ProductImage/dining4.jpg";

const CetegorySection = () => {
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
    <div className="mt-10 max-w-screen-xl mx-auto p-3">
      <h1 className="text-4xl font-semibold text-primary my-10">
        Our Cetegory
      </h1>
      <ul className="flex justify-betwee items-center w-full">
        <li
          className={`${
            living && "border-b-4 border-primary"
          } font-semibold md:text-l text-sm text-primary cursor-pointer`}
          onClick={handleLiving}
        >
          LIVING ROOM
        </li>
        <li
          className={`${
            bed && "border-b-4 border-primary"
          } font-semibold md:text-l text-sm text-primary cursor-pointer ml-10`}
          onClick={handleBed}
        >
          BED ROOM
        </li>
        <li
          className={`${
            dining && "border-b-4 border-primary"
          } font-semibold md:text-l text-sm text-primary cursor-pointer ml-10`}
          onClick={handleDining}
        >
          DINING ROOM
        </li>
        <li
          className={`${
            light && "border-b-4 border-primary"
          } font-semibold md:text-l text-sm text-primary cursor-pointer ml-10`}
          onClick={handleLight}
        >
          LIGHT
        </li>
      </ul>

      {living && (
        <CetegorySection1
          heading="Living room"
          img1={sofa4}
          img2={sofa3}
          img3={sofa2}
          img4={sofa1}
        />
      )}
      {bed && (
        <CetegorySection1
          heading="Bed Room"
          img1={bed4}
          img2={bed3}
          img3={bed2}
          img4={bed1}
        />
      )}
      {dining && (
        <CetegorySection1
          heading="Dining Room"
          img1={dining4}
          img2={dining3}
          img3={dining2}
          img4={dining1}
        />
      )}
      {light && (
        <CetegorySection1
          heading="Lighting"
          img1={light4}
          img2={light3}
          img3={light2}
          img4={light1}
        />
      )}
    </div>
  );
};

export default CetegorySection;
