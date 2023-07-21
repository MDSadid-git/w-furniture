import { BsBoxes } from "react-icons/bs";
import vendor from "../../../assets/Vendors/vendors.png";
import { TbBrandAirtable, TbBrandXbox, TbSofa } from "react-icons/tb";
import { Link } from "react-router-dom";
import vendor1 from '../../../assets/ProductImage/vendor1.jpg'
import vendor2 from '../../../assets/ProductImage/vendor2.jpg'
import vendor3 from '../../../assets/ProductImage/vendor3.jpg'
import vendor4 from '../../../assets/ProductImage/vendor4.jpg'
import vendor5 from '../../../assets/ProductImage/vendor5.jpg'
import vendor6 from '../../../assets/ProductImage/vendor6.jpg'
import vendor7 from '../../../assets/ProductImage/vendor7.jpg'
import vendor8 from '../../../assets/ProductImage/vendor8.jpg'
import vendorbanner from '../../../assets/ProductImage/vendorbanner.jpg'

const AllVendors = () => {
  const vendors = [
    {
      id: 200,
      name: "John Smith",
      type: "Two Brothers",
      brand: <TbBrandAirtable />,
      image:
        vendor1,
    },
    {
      id: 201,
      name: "Tina More",
      type: "BitBox",
      brand: <TbSofa />,
      image:
        vendor2,
    },
    {
      id: 202,
      name: "Kim bel",
      type: "SinCarpet",
      brand: <BsBoxes />,
      image:
       vendor3,
    },
    {
      id: 203,
      name: "Jimmy falcon",
      type: "ApeIn",
      brand: <TbBrandXbox />,
      image:
        vendor4,
    },
    {
      id: 204,
      name: "Jhon wick",
      type: "Luffi Cart",
      brand: <TbBrandXbox />,
      image:
        vendor5,
    },
    {
      id: 205,
      name: "Rita sin",
      type: "Renovatory",
      brand: <TbBrandXbox />,
      image:
        vendor6,
    },
    {
      id: 206,
      name: "Drzen",
      type: "Will bothers",
      brand: <TbBrandXbox />,
      image:
        vendor3,
    },
    {
      id: 207,
      name: "Nick",
      type: "tik right",
      brand: <TbBrandXbox />,
      image:
        vendor8,
    },
    {
      id: 208,
      name: "Watson",
      type: "swift type",
      brand: <TbBrandXbox />,
      image:
       vendor1,
    },
    {
      id: 209,
      name: "Marry Jane",
      type: "bucket wrap",
      brand: <TbBrandXbox />,
      image:
        vendor2,
    },
  ];
  return (
    <div className="px-3 md:px-0 mb-10">
      <div className="relative bg-gradient-to-br from-primary to-secondary">
        <img
          className="w-full md:h-[500px] h-96  opacity-40"
          src={vendorbanner}
          alt=""
        />
        <div className="absolute w-full md:top-32 top-20 overflow-hidden">
          <h1 className="text-6xl font-semibold text-center vendorSlide">
            Our Vendors
          </h1>
          <div className="flex justify-center vendorIconSlide">
            <img src={vendor} alt="" width="400px" />
          </div>
        </div>
      </div>
      <div className="text-center max-w-screen-md mx-auto space-y-7 text-gray-800 py-10">
        <h1 className="font-sans italic text-4xl font-semibold text-primary">
          Learn About Our Vendors
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-screen-2xl mx-auto">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="group p-2 bg-[f7941d] border overflow-hidden space-y-4 rounded-md cursor-pointer"
          >
            <div className="overflow-hidden h-72 w-full">
              <img
                src={vendor.image}
                alt=""
                className="h-full w-full rounded-md scale-100 group-hover:scale-110 duration-300 grayscale hover:grayscale-0 md:opacity-50 group-hover:opacity-100"
              />
            </div>
            <div className="flex justify-between items-center relative">
              <div className=" bottom-7 left-2">
                <h1 className="text-5xl text-primary italic">{vendor.name}</h1>
              </div>
              <div className="bg-primary inline-block rounded-full p-2 md:absolute right-[-60px] group-hover:right-5 duration-500">
                <span className="text-4xl text-white">{vendor.brand}</span>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-xl font-semibold">
                  <span className="text-primary">Shop Name:</span>{" "}
                  <span className="uppercase">{vendor.type}</span>
                </h1>
              </div>
            </div>
            <div>
              <Link to="/vendor-details">
                <button className="px-8 py-3 rounded-md bg-primary duration-300s opacity-90 hover:bg-gray-800 duration-300 text-white">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVendors;
