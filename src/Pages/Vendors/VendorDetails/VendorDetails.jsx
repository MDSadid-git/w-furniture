import { BsTelephone } from "react-icons/bs";
import { TbAddressBook, TbBrandXbox } from "react-icons/tb";
import VendorProducts from "./VendorProducts";
import vendor3 from '../../../assets/ProductImage/vendor3.jpg'

const VendorDetails = () => {
  return (
    <div className=" max-w-screen-xl mx-auto py-10 px-3">
      {/* details about vendor */}
      <div className="grid md:grid-cols-2 gap-10 overflow-hidden">
        <div className="space-y-8">
          <h1 className="text-4xl font-semibold text-primary">Tim Bell</h1>
          <div className="flex justify-between">
            <div className=" space-y-2">
              <h4 className=" flex items-center">
                {/* <AiOutlineTag className="text-2xl" /> */}
                <span className="text-gray-800 text-lg font-semibold">
                  Shop Name
                </span>
              </h4>
              <p className="font-bold text-xl uppercase">bucket wrap</p>
            </div>
            <div className=" text-end space-y-2">
              <h4 className="text-gray-800 text-lg font-semibold">Shop Logo</h4>
              <div className="bg-primary p-1 inline-block rounded-full">
                <span className="text-2xl text-white">
                  <TbBrandXbox />
                </span>
              </div>
            </div>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            nam dignissimos. Placeat dolorum sequi veniam omnis porro nihil
            dolores laborum recusandae quaerat ea facilis facere, nostrum nemo
            atque voluptatibus fuga.
          </p>
          <div className="grid lg:grid-cols-2 gap-4 ">
            <div className="border group hover:bg-primary duration-300 hover:text-secondary  bg-slate-100 px-5 shadow hover:shadow-xl cursor-pointer py-3 rounded flex items-center space-x-4">
              <div className="text-3xl text-primary group-hover:text-secondary">
                <TbAddressBook />
              </div>
              <div className="">
                <h2>Address</h2>
                <p className="font-semibold">
                  Block-B, AftabNagar, Rampura, Dhaka-1219
                </p>
              </div>
            </div>
            <div className="border hover:bg-primary group duration-300 hover:text-secondary  bg-slate-100 px-5 shadow hover:shadow-xl py-3 rounded flex items-center space-x-4 cursor-pointer">
              <div className="text-2xl text-primary group-hover:text-secondary">
                <BsTelephone />
              </div>
              <div>
                <h2>Phone</h2>
                <a href="tel:+880171095523" className="font-semibold">
                  +88 0171 095523
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96">
          <img
            src={vendor3}
            alt=""
            className="w-full rounded shadow-lg"
          />
        </div>
      </div>
      {/* Basic Vendor Details finished */}
      {/* Vendors some products */}
      <div className="py-10">
        <h1>
          <span className="text-3xl font-semibold">Vendors Products</span>{" "}
          <span className="text-6xl text-primary">.</span>{" "}
        </h1>
        <VendorProducts />
      </div>
    </div>
  );
};

export default VendorDetails;
