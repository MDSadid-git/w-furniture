import { Link } from "react-router-dom";

import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import {
  MdOutlineLocationOn,
  MdOutlinePhoneInTalk,
  MdOutlineMail,
} from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-primary p-5 mt-5">
      <div className="max-w-[80%] my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="mx-auto">
            <h1 className="text-2xl font-semibold mt-5 text-secondary">
              Weero Furniture
            </h1>
            <p className="text-white mt-5 font-semibold">
              Weero Furniture started life as a business lines and calls
              provider in Birmingham City Centre, we moved our offices to
              Halesowen in 2012. We expanded over the following years to cover
              all forms of business communications and gained customers from all
              over the UK.
            </p>
            <div className="flex my-5">
              <span className="bg-secondary rounded-full text-primary p-0.5 text-3xl  mr-3 hover:text-indigo-500 duration-300 cursor-pointer">
                <BsFacebook />
              </span>
              <span className="bg-secondary rounded-full text-primary p-0.5 text-3xl  mr-3 hover:text-indigo-500 duration-300 cursor-pointer">
                <AiFillTwitterCircle />
              </span>
              <span className="bg-secondary rounded-full text-primary p-0.5 text-3xl mr-3 hover:text-red-600 cursor-pointer">
                <AiFillYoutube />
              </span>
            </div>
          </div>
          <div className="text-white md:mx-auto mt-4">
            <h1 className="text-xl font-semibold text-secondary px-2"> Menu</h1>
            <ul>
              <li className="flex justify-between items-center cursor-pointer mb-2 mt-5 hover:scale-125 hover:bg-secondary hover:text-primary duration-300 rounded-md px-3">
                <Link to="/about">About</Link>
              </li>
              <li className="flex justify-between items-center cursor-pointer my-2 hover:scale-125 hover:bg-secondary hover:text-primary duration-300 rounded-md px-3">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="flex justify-between items-center cursor-pointer my-2 hover:scale-125 hover:bg-secondary hover:text-primary duration-300 rounded-md px-3">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="flex justify-between items-center cursor-pointer my-2 hover:scale-125 hover:bg-secondary hover:text-primary duration-300 rounded-md px-3">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="flex justify-between items-center cursor-pointer my-2 hover:scale-125 hover:bg-secondary hover:text-primary duration-300 rounded-md px-3">
                <Link to="/checkout">CheakOut</Link>
              </li>
            </ul>
          </div>
          <div className="text-white md:mx-auto">
            <h1 className="text-xl font-semibold text-secondary mt-5">
              Contact Us
            </h1>
            <div className="mt-10 flex">
              <span className="">
                <MdOutlineLocationOn className="text-3xl bg-secondary text-primary rounded-full p-2  mr-3" />
              </span>
              <h1 className="font-semibold">
                Weero Furniture Group Ltd,
                <br /> Commercial House, 21a Stone Street,
                <br /> Dudley, West Midlands, DY1 1NJ
              </h1>
            </div>

            <div className="mt-5 flex">
              <span className=" ">
                <MdOutlinePhoneInTalk className="text-3xl bg-secondary text-primary p-2 rounded-full mr-3" />
              </span>
              <h1 className="font-semibold">0800 849 8585</h1>
            </div>
            <div className="mt-5 flex">
              <span className=" ">
                <MdOutlineMail className="text-3xl bg-secondary text-primary p-2 rounded-full mr-3" />
              </span>
              <h1 className="font-semibold">weero@furniture.com</h1>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-white mt-10" />
        <h1 className="font-semibold text-center mt-3 text-secondary">
          © 2023 Weero Furniture Group Holdings Ltd. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
