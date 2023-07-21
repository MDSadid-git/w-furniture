import Promises from "../Home2/Promises/Promises";
import OfferSlider from "./OfferSlider/OfferSlider";
import OfferSlider2 from "./OfferSlider/OfferSlider2";
import OneSlider from "./OneSlider/OneSlider";
import ProductBanner from "./ProductBanner/ProductBanner";

const ProductSliders = () => {
  return (
    <>
      <ProductBanner />
      <OfferSlider />
      <OneSlider />
      <OfferSlider2 />
      <Promises />
    </>
  );
};

export default ProductSliders;
