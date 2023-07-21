import { useState } from "react";
import ProductFilter from "../../Components/ProductFilter/ProductFilter";
import { RxCross2 } from "react-icons/rx";
import { BsFillSquareFill, BsSliders } from "react-icons/bs";
import Card from "../../Components/Card/Card";
import SingleCard from "../../Components/SingleCard/SingleCard";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import { Link } from "react-router-dom";
import bed2 from "../../assets/ProductImage/bed2.jpg";
import bed3 from "../../assets/ProductImage/bed3.jpg";
import bed4 from "../../assets/ProductImage/bed4.jpg";
import sofa2 from "../../assets/ProductImage/sofa2.jpg";
import sofa3 from "../../assets/ProductImage/sofa3.jpg";
import sofa4 from "../../assets/ProductImage/sofa4.jpg";
import light2 from "../../assets/ProductImage/light2.jpg";
import light3 from "../../assets/ProductImage/light3.jpg";
import light4 from "../../assets/ProductImage/light4.jpg";
import dining2 from "../../assets/ProductImage/dining2.jpg";
import dining3 from "../../assets/ProductImage/dining3.jpg";
import dining4 from "../../assets/ProductImage/dining4.jpg";

const ProductFilterDrawar = () => {
  let [show, setShow] = useState(12);
  let handelShowNubmer = (e) => {
    console.log(+e.target.value);
    setShow(+e.target.value);
  };

  const [filter, setFilter] = useState(false);

  console.log(filter);

  const [gridSingle, setGridSingle] = useState(false);
  const [gridTwo, setGridTwo] = useState(false);
  const [gridThere, setGridThere] = useState(true);
  const [gridFour, setGridFour] = useState(false);

  const grid2 =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 max-w-screen-md mx-auto";
  const grid3 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2";
  const grid4 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2";

  const handleGrid2 = () => {
    setGridThere(false);
    setGridTwo(true);
    setGridFour(false);
    setGridSingle(false);
  };
  const handleGrid3 = () => {
    setGridThere(true);
    setGridTwo(false);
    setGridFour(false);
    setGridSingle(false);
  };
  const handleGrid4 = () => {
    setGridThere(false);
    setGridTwo(false);
    setGridFour(true);
    setGridSingle(false);
  };
  const handleGrid1 = () => {
    setGridSingle(true);
    setGridThere(false);
    setGridTwo(false);
    setGridFour(false);
  };

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-5 flex">
      <div className={`duration-300 ${filter ? "w-[80%] " : "w-[100%] "}`}>
        <div className="mb-16 border py-2 flex justify-between items-center p-2 gap-3 ">
          <div className="flex items-center">
            <ProductFilter title="Sort by:">
              <option selected>Name</option>
              <option value="US">Dining Room</option>
              <option value="US">Living Room</option>
              <option value="US">Chair</option>
              <option value="US">Table</option>
            </ProductFilter>
            <ProductFilter onChange={handelShowNubmer} title="Show:">
              <option selected>12</option>
              <option>24</option>
              <option>48</option>
            </ProductFilter>
            <div className="relative border mt-[-35px] ml-3 hidden lg:block">
              <button
                className={`hover:text-primary  duration-300 absolute top-0 ${
                  gridTwo ? "text-primary" : "text-gray-800"
                }`}
                onClick={handleGrid2}
              >
                <span className="flex">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
                <span className="flex absolute top-[10px]">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
                <span className="flex absolute top-5">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
              </button>
              <button
                className={`hover:text-primary duration-300 absolute top-0 left-7 ${
                  gridThere ? "text-primary" : "text-gray-800"
                }`}
                onClick={handleGrid3}
              >
                <span className="flex ">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
                <span className="flex absolute top-[10px]">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
                <span className="flex absolute top-5">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
              </button>
              <button
                className={`hover:text-primary duration-300 absolute top-0 left-16 ${
                  gridFour ? "text-primary" : "text-gray-800"
                }`}
                onClick={handleGrid4}
              >
                <span className="flex ">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
                <span className="flex absolute top-[10px]">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
                <span className="flex absolute top-5">
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2 mr-0.5" />
                  <BsFillSquareFill className="w-2" />
                </span>
              </button>

              <button
                className="group  absolute top-0.5 left-28"
                onClick={handleGrid1}
              >
                <span className="">
                  <BsFillSquareFill
                    className={`w-7 h-2 mt-0.5  group-hover:bg-primary group-hover:text-primary duration-300 ${
                      gridSingle
                        ? "text-primary bg-primary"
                        : "text-gray-800 bg-gray-800"
                    }`}
                  />
                  <BsFillSquareFill
                    className={`w-7 h-2 mt-0.5  group-hover:bg-primary group-hover:text-primary duration-300 ${
                      gridSingle
                        ? "text-primary bg-primary"
                        : "text-gray-800 bg-gray-800"
                    }`}
                  />
                  <BsFillSquareFill
                    className={`w-7 h-2 mt-0.5  group-hover:bg-primary group-hover:text-primary duration-300 ${
                      gridSingle
                        ? "text-primary bg-primary"
                        : "text-gray-800 bg-gray-800"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <button
              className="flex items-center font-semibold text-lg border py-1 px-3 rounded hover:text-primary hover:border-primary"
              onClick={handleFilter}
            >
              Filter
              <span className="font-bold ml-2">
                {filter ? <RxCross2 className="text-primary" /> : <BsSliders />}
              </span>
            </button>
          </div>
        </div>
        <div>
          <>
            <div
              className={`${gridTwo && grid2} ${gridThere && grid3} ${
                gridFour && grid4
              } ${gridSingle ? "hidden" : "block"}`}
            >
              <Card
                img={sofa2}
                name="Bed"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <Card
                img={sofa3}
                name="Computer Table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <Card
                img={bed2}
                name="Sofa"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <Card
                img={bed3}
                name="Bed side Table"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <Card
                img={dining2}
                name="Center table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <Card
                img={dining3}
                name="Dressing Table"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <Card
                img={light2}
                name="Sowcase"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <Card
                img={light3}
                name="Side table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <Card
                img={bed4}
                name="Tv Trolly"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <Card
                img={sofa4}
                name="Mattress"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <Card
                img={dining4}
                name="Oven Stand"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <Card
                img={light4}
                name="Divan"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />
            </div>
            <div className={`${gridSingle ? "block" : "hidden"}`}>
              <SingleCard
                img={sofa2}
                name="Bed"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <SingleCard
                img={sofa3}
                name="Computer Table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <SingleCard
                img={bed2}
                name="Sofa"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <SingleCard
                img={bed3}
                name="Bed side Table"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <SingleCard
                img={dining2}
                name="Center table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <SingleCard
                img={dining3}
                name="Dressing Table"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <SingleCard
                img={light2}
                name="Sowcase"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <SingleCard
                img={light3}
                name="Side table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <SingleCard
                img={bed4}
                name="Tv Trolly"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <SingleCard
                img={sofa4}
                name="Mattress"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <SingleCard
                img={dining4}
                name="Oven Stand"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <SingleCard
                img={light4}
                name="Divan"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />
            </div>
          </>
        </div>
      </div>
      <div className={` ${filter ? "block" : "hidden"} w-[20%]`}>
        <RightSidebar />
        <h1 className="font-dm text-xl font-medium my-2 mb-2">
          Filter By Price
        </h1>

        <div className="flex mt-4 justify-between mb-3">
          <div className="px-6 py-2 border hover:bg-primary hover:text-white cursor-pointer duration-300 rounded">
            Filter
          </div>
          <div className="px-6 py-2 border hover:bg-primary hover:text-white cursor-pointer duration-300 rounded">
            Price: $0 — $120
          </div>
        </div>
        <Link to="#">
          <img
            className="mt-5 lg:mt-20 w-full"
            src="https://i.ibb.co/XYv4yJd/top1.png"
          />
        </Link>
        <Link to="#">
          <img
            className="mt-5 lg:mt-20 w-full"
            src="https://i.ibb.co/6v8g8sg/bright-cozy-stylish-interior-bedroom-beautiful-rich-antique-furniture-four-poster-bed.jpg"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductFilterDrawar;
