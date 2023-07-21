import Slider from "react-slick";
import banner from "../../../assets/Banner/banner.jpg";
import OneSlideCard from "./OneSlideCard";
import bed1 from '../../../assets/ProductImage/bed1.jpg'
import sofa1 from '../../../assets/ProductImage/sofa1.jpg'
import sofa4 from '../../../assets/ProductImage/sofa4.jpg'
import dining1 from '../../../assets/ProductImage/dining1.jpg'
import light1 from '../../../assets/ProductImage/light1.jpg'

const OneSlider = () => {
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
      <div
        className="h-[600px] bg-cover bg-no-repeat w-full mb-10"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="lg:w-1/2 w-full absolute lg:py-20 py-10 lg:right-10 px-2 ">
          <div className="testmonial">
            <Slider {...settings}>
              <div className="lg:h-[440px] w-full">
                <OneSlideCard
                  title="Weero sofa"
                  image={sofa4}
                  sku="A-774"
                  details=" Commodi id et officiis accusantium reiciendis iste aspernatur
              nesciunt, ea doloremque molestias mollitia, adipisci, corporis
              modi. Omnis atque itaque ex debitis temporibus."
                  price="$320"
                />
              </div>
              <div className="lg:h-[440px] w-full">
                <OneSlideCard
                  title="Weero One Sufa"
                  image={sofa1}
                  sku="A-744"
                  details=" Commodi id et officiis accusantium reiciendis iste aspernatur
              nesciunt, ea doloremque molestias mollitia, adipisci, corporis
              modi. Omnis atque itaque ex debitis temporibus."
                  price="$344"
                />
              </div>
              <div className="lg:h-[440px] w-full">
                <OneSlideCard
                  title="Comfort Chair"
                  image={dining1}
                  sku="A-722"
                  details=" Commodi id et officiis accusantium reiciendis iste aspernatur
              nesciunt, ea doloremque molestias mollitia, adipisci, corporis
              modi. Omnis atque itaque ex debitis temporibus."
                  price="$454"
                />
              </div>
              <div className="lg:h-[440px] w-full">
                <OneSlideCard
                  title="Big sofa"
                  image={bed1}
                  sku="A-722"
                  details=" Commodi id et officiis accusantium reiciendis iste aspernatur
              nesciunt, ea doloremque molestias mollitia, adipisci, corporis
              modi. Omnis atque itaque ex debitis temporibus."
                  price="$776"
                />
              </div>
              <div className="lg:h-[440px] w-full">
                <OneSlideCard
                  title="single sofa"
                  image={light1}
                  sku="A-788"
                  details=" Commodi id et officiis accusantium reiciendis iste aspernatur
              nesciunt, ea doloremque molestias mollitia, adipisci, corporis
              modi. Omnis atque itaque ex debitis temporibus."
                  price="$322"
                />
              </div>
              <div className="lg:h-[440px] w-full">
                <OneSlideCard
                  title="Weero Sofa"
                  image={bed1}
                  sku="A-711"
                  details=" Commodi id et officiis accusantium reiciendis iste aspernatur
              nesciunt, ea doloremque molestias mollitia, adipisci, corporis
              modi. Omnis atque itaque ex debitis temporibus."
                  price="$544"
                />
              </div>
              <div className="lg:h-[440px] w-full">
                <OneSlideCard
                  title="Comfort"
                  image={sofa1}
                  sku="A-723"
                  details=" Commodi id et officiis accusantium reiciendis iste aspernatur
              nesciunt, ea doloremque molestias mollitia, adipisci, corporis
              modi. Omnis atque itaque ex debitis temporibus."
                  price="644$"
                />
              </div>
              <div className="lg:h-[440px] w-full">
                <OneSlideCard
                  title="Pillow sofa"
                  image={dining1}
                  sku="A-728"
                  details=" Commodi id et officiis accusantium reiciendis iste aspernatur
              nesciunt, ea doloremque molestias mollitia, adipisci, corporis
              modi. Omnis atque itaque ex debitis temporibus."
                  price="644$"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneSlider;
