import Banner from "../../Components/Banner/Banner";
import CetegorySection from "../../Components/CetegorySection/CetegorySection";
import OurPromise from "../../Components/OurPromise/OurPromise";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import GetOrganized from "../../Components/GetOrganized/GetOrganized";
import TopSale from "../../Components/TopSale/TopSale";
import LimitedOffer from "../../Components/LimitedOffer/LimitedOffer";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <OurPromise />
        <CetegorySection />
        <ProductSlider />
        <LimitedOffer />
        <GetOrganized />
        <TopSale />
      </div>
    </div>
  );
};

export default Home;
