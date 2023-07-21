import { CgSearch } from "react-icons/cg";
import Select from "react-select";
import {
  BiSupport,
  BiPhoneCall,
  BiLogIn,
  BiImage,
  BiMessageAltError,
} from "react-icons/bi";
import {
  TfiLayoutAccordionList,
  TfiLayoutGrid2Thumb,
  TfiLayoutSlider,
  TfiViewListAlt,
} from "react-icons/tfi";
import { VscLayoutPanelOff } from "react-icons/vsc";
import { TbBrandBlogger, TbListDetails } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLayout,
} from "react-icons/ai";
import { MdOutlineReviews, MdOutlineMail } from "react-icons/md";
import { RiContactsLine, RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import logo from "../../assets/ProductImage/logo.png";

import {
  BsArrowUpCircle,
  BsFilterLeft,
  BsGrid1X2,
  BsInfoSquare,
  BsLayoutSidebarReverse,
  BsReverseLayoutSidebarReverse,
  BsReverseLayoutTextSidebarReverse,
  BsShop,
} from "react-icons/bs";
import blogPage from "../../assets/Mega-Menu-img/BlogPage.png";
import image1 from "../../assets/Mega-Menu-img/tables.jpg";
import gif from "../../assets/Mega-Menu-img/image_processing20200518-20352-9jxr3y.gif";
import { FaQuestion } from "react-icons/fa";
import MobileNavbar from "../../Components/MobileNavbar/MobileNavbar";
import { useEffect, useState } from "react";
import SelectOption from "../../Components/SelectOption/SelectOption";
import blog from "../../assets/ProductImage/blog.jpg";
import sofa3 from "../../assets/ProductImage/sofa3.jpg";

export const navItem =
  "md:ml-4 flex justify-between items-center mb-1  px-3 py-1 rounded-md cursor-pointer font-semibold transition duration-500";

const Navbar = () => {
  const [homeVisible, setHomeVisible] = useState(false);
  const [shopVisible, setShopVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [vendorVisible, setVendorVisible] = useState(false);
  const [pagesVisible, setPagesVisible] = useState(false);

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle the menu visibility
  const HomeMenu = () => {
    setHomeVisible(!homeVisible);
  };
  const ShopMenu = () => {
    setShopVisible(!shopVisible);
  };
  const BlogMenu = () => {
    setBlogVisible(!blogVisible);
  };
  const VendorMenu = () => {
    setVendorVisible(!vendorVisible);
  };
  const PagesMenu = () => {
    setPagesVisible(!pagesVisible);
  };
  // Function to hide the menu items and menu itself
  const hideHomeMenu = () => {
    setHomeVisible(false);
  };
  const hideShopMenu = () => {
    setShopVisible(false);
  };
  const hideBlogMenu = () => {
    setBlogVisible(false);
  };
  const hideVendorMenu = () => {
    setVendorVisible(false);
  };
  const hidePagesMenu = () => {
    setPagesVisible(false);
  };
  const scrollBottomToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="">
      <div className="flex justify-between px-5 md:px-10 py-1 bg-primary relative text-secondary z-[9999]">
        <div className="text-secondary">
          <ul className="flex items-center">
            <Link to="/contact">
              <li className="mr-5 font-semibold flex items-center hover:bg-white hover:text-primary px-1 duration-300 rounded-md">
                <RiContactsLine className="mr-1" /> Contact
              </li>
            </Link>
            <li className="mr-5 font-semibold flex items-center hover:bg-white hover:text-primary px-1 duration-300 rounded-md cursor-pointer">
              <MdOutlineReviews className="mr-1" /> Reviews
            </li>
            <li className="mr-5 font-semibold hidden lg:block hover:bg-white hover:text-primary px-1 duration-300 rounded-md cursor-pointer">
              <div className="flex items-center">
                <BiSupport className="mr-1" /> Support
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="mr-5 font-semibold  hidden lg:block">
              <div className="flex items-center hover:bg-white hover:text-primary px-1 duration-300 rounded-md">
                <BiPhoneCall className="mr-1" />
                <a href="callto:+8801765896545">+8801765896545</a>
              </div>
            </li>
            <li className="mr-5 font-semibold hidden lg:block">
              <div className="flex items-center hover:bg-white hover:text-primary px-1 duration-300 rounded-md">
                <MdOutlineMail className="mr-1" />
                <a href="mailto:weero@furniture.com">weero@furniture.com</a>
              </div>
            </li>
            <Link to="/wishlist">
              <li className="mr-5 font-semibold hover:bg-white hover:text-primary rounded-full duration-300 px-0.5">
                <AiOutlineHeart className=" text-3xl mx-auto" />
              </li>
            </Link>
            <Link to="/cart">
              <li className="font-semibold flex hover:bg-secondary hover:text-primary rounded-full duration-300 px-0.5">
                <AiOutlineShoppingCart className="text-3xl" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Marquee className=" ">
        <p className="py-0.5 font-semibold text-primary">
          Exclusive limited-time offer: Upgrade your living space with our
          stylish and versatile furniture collection, designed to enhance
          comfort and elevate your home decor.
        </p>
      </Marquee>
      <div className=" w-full transition duration-700">
        {/* for Big Device */}
        <div
          className={`${
            isNavbarFixed ? "lg:fixed w-full top-0 shadow-md" : ""
          } bg-secondary py-2 z-50 hidden lg:block`}
        >
          {/* here alignment fixed for whole nav looks like */}
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex justify-center items-center">
              <Link to="/">
                <h1 className="text-lg font-semibold flex items-center">
                  <img className="w-12 mr-1" src={logo} alt="" />
                  WEERO <span className="text-primary">FURNITURE</span>
                </h1>
              </Link>
            </div>
            {/* for mega menu range */}
            <div className="flex items-center relative">
              <div className="flex items-center">
                <div className="bg-white flex justify-between items-center">
                  <input
                    className="py-1 px-1 hidden lg:block focus:outline-none focus:border border-primary"
                    type="text"
                    placeholder="Search"
                  />
                  <span className="text-2xl p-2">
                    <CgSearch />
                  </span>
                </div>
                <SelectOption />
              </div>
              <div>
                {/* home menu */}
                <ul className="flex items-center">
                  <nav>
                    <div
                      className="py-3 group relative cursor-pointer"
                      onMouseEnter={HomeMenu}
                      onMouseLeave={HomeMenu}
                    >
                      <li className="group-hover:bg-primary group-hover:text-secondary px-3 py-1 rounded-md">
                        <h1 className="flex items-center">
                          <span className="mr-1">
                            <AiOutlineHome />
                          </span>{" "}
                          Home
                        </h1>
                        <div className="absolute z-50 left-0 mt-2 group-hover:translate-y-2 duration-500">
                          {homeVisible && (
                            <div className=" bg-white rounded-md space-y-1 p-3  w-36 ">
                              <li
                                className="text-black px-3 py-1 hover:translate-x-1 hover:text-primary duration-300"
                                onClick={hideHomeMenu}
                              >
                                <Link to="/home">
                                  <span className="flex items-center">
                                    <AiOutlineHome />
                                    <span className="ml-2">Home-1</span>
                                  </span>
                                </Link>
                              </li>
                              <li
                                className="text-black px-3 py-1 border-t my-1 hover:translate-x-1 hover:text-primary duration-300"
                                onClick={hideHomeMenu}
                              >
                                <Link to="/home-2">
                                  <span className="flex items-center">
                                    <AiOutlineHome />
                                    <span className="ml-2">Home-2</span>
                                  </span>
                                </Link>
                              </li>
                            </div>
                          )}
                        </div>
                      </li>
                    </div>
                  </nav>
                  {/* shop menu */}
                  <nav>
                    <div
                      className="py-3 group"
                      onMouseEnter={ShopMenu}
                      onMouseLeave={ShopMenu}
                    >
                      <li className=" group-hover:bg-primary group-hover:text-secondary px-3 py-1 rounded-md">
                        <h1 className="flex items-center cursor-pointer">
                          {" "}
                          <span className="mr-1">
                            <AiOutlineShopping />
                          </span>{" "}
                          Shop
                        </h1>
                        <div className="absolute z-50 left-0 mt-2 group-hover:translate-y-2 duration-500">
                          {shopVisible && (
                            <div className=" bg-white rounded-md space-y-1 p-3">
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <div className="overflow-hidden">
                                    <img
                                      src={sofa3}
                                      alt=""
                                      className="w-full h-64 object rounded-md"
                                    />
                                  </div>
                                  <div className="space-y-5 text-black mt-5 text-center p-1">
                                    <h1 className="uppercase text-primary font-semibold text-2xl">
                                      Decorate Your Home
                                    </h1>
                                    <p>
                                      Homes that differ in terms of style,
                                      concept and architectural solutions have
                                      been furnished by Furniture Factory. These
                                      spaces tell of an international lifestyle
                                      that expresses modernity, research and a
                                      creative spirit.
                                    </p>
                                    <button className="bg-primary hover:bg-gray-800 duration-300 px-3 py-2 rounded-md text-white">
                                      <a href="tel:+880171095593">
                                        Call Us: +880 1710 095593
                                      </a>
                                    </button>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 text-black p-3 bg-secondary rounded-md">
                                  <div>
                                    <h1 className="text-primary flex items-center justify-center space-x-1 text-xl font-semibold">
                                      <AiOutlineLayout />
                                      <span> Shop Layout</span>
                                    </h1>
                                    <div
                                      onClick={hideShopMenu}
                                      className="p-3 hover:scale-110 duration-300"
                                    >
                                      <Link to="/shop">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <BsLayoutSidebarReverse />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Sidebar
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                    <div
                                      onClick={hideShopMenu}
                                      className="p-3 hover:scale-110 duration-300"
                                    >
                                      <Link to="/product-filter">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <BsFilterLeft />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Filter Drawer
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                  {/* product layout */}
                                  <div>
                                    <h1 className="text-primary flex items-center justify-center space-x-1 text-xl font-semibold">
                                      <AiOutlineShopping />
                                      <span> Product Layout</span>
                                    </h1>
                                    <div
                                      className="p-3 hover:scale-110 duration-300"
                                      onClick={hideShopMenu}
                                    >
                                      <Link to="/product-sliders">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <TfiLayoutSlider />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Slider
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                    <div
                                      className="p-3 hover:scale-110 duration-300"
                                      onClick={hideShopMenu}
                                    >
                                      <Link to="/shop">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <BsGrid1X2 />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Grid
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                  {/* product image */}
                                  <div>
                                    <h1 className="text-primary flex items-center justify-center space-x-1 text-xl font-semibold">
                                      <BiImage />
                                      <span>Product Image</span>
                                    </h1>
                                    <div
                                      className="p-3 hover:scale-110 duration-300 "
                                      onClick={hideShopMenu}
                                    >
                                      <Link to="/product-image-right">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <BsReverseLayoutSidebarReverse />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Right Thumbnail
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                    <div
                                      className="p-3 hover:scale-110 duration-300"
                                      onClick={hideShopMenu}
                                    >
                                      <Link to="/product-image-bottom">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <VscLayoutPanelOff />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              bottom Thumbnail
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="">
                                    <img src={gif} alt="" className="h-full" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </li>
                    </div>
                  </nav>
                  {/* blog mega menu */}
                  <nav>
                    <div
                      className="py-3 group"
                      onMouseEnter={BlogMenu}
                      onMouseLeave={BlogMenu}
                    >
                      <li className=" group-hover:bg-primary group-hover:text-secondary px-3 py-1 rounded-md">
                        <h1 className="flex items-center cursor-pointer">
                          {" "}
                          <span className="mr-1">
                            <TbBrandBlogger />
                          </span>{" "}
                          Blog
                        </h1>
                        <div className="absolute z-50 left-0 mt-2 group-hover:translate-y-2 duration-500">
                          {blogVisible && (
                            <div className=" bg-white rounded-md space-y-1 p-3">
                              <div className="grid grid-cols-2">
                                <div className="overflow-hidden">
                                  <img
                                    src={blog}
                                    alt=""
                                    className="w-full h-64 object rounded-md"
                                  />
                                </div>
                                <div className="grid grid-cols-2 text-black p-3 bg-secondary rounded-md">
                                  <div>
                                    <h1 className="text-primary flex items-center justify-center space-x-1 text-xl font-semibold">
                                      <CiBoxList />
                                      <span>Blog Style</span>
                                    </h1>
                                    <div
                                      className="p-3 hover:scale-110 duration-300"
                                      onClick={hideBlogMenu}
                                    >
                                      <Link to="/blog-list">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <TfiViewListAlt />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Blog List
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                    <div
                                      className="p-3 hover:scale-110 duration-300"
                                      onClick={hideBlogMenu}
                                    >
                                      <Link to="/blog">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <BsGrid1X2 />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Blog Grid
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>

                                  <div>
                                    <h1 className="text-primary flex items-center justify-center space-x-1 text-xl font-semibold">
                                      <TfiLayoutAccordionList />
                                      <span>Post layout</span>
                                    </h1>
                                    <div
                                      className="p-3 hover:scale-110 duration-300"
                                      onClick={hideBlogMenu}
                                    >
                                      <Link to="/blog-gallery">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <TfiLayoutGrid2Thumb />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Post Gallery
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                    <div
                                      className="p-3 hover:scale-110 duration-300"
                                      onClick={hideBlogMenu}
                                    >
                                      <Link to="/blog-gallery-leftsidebar">
                                        <div className="grid justify-items-center">
                                          <div className="text-4xl">
                                            <BsReverseLayoutTextSidebarReverse />
                                          </div>
                                          <div>
                                            <h1 className="font-semibold text-sm">
                                              Left Sidebar
                                            </h1>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </li>
                    </div>
                  </nav>
                  {/* vendor menu */}
                  <nav>
                    <div
                      className="py-3 group relative cursor-pointer"
                      onMouseEnter={VendorMenu}
                      onMouseLeave={VendorMenu}
                    >
                      <li className=" group-hover:bg-primary group-hover:text-secondary px-3 py-1 rounded-md">
                        <h1 className="flex items-center cursor-pointer">
                          {" "}
                          <span className="mr-1">
                            <BsShop />
                          </span>{" "}
                          Vendor
                        </h1>
                        <div className="absolute z-50 left-0 mt-2 group-hover:translate-y-2 duration-500">
                          {vendorVisible && (
                            <div className="bg-white rounded-md space-y-1 p-3">
                              <ul className="w-40">
                                <li className="text-black px-3 py-1 hover:translate-x-1 hover:text-primary duration-300">
                                  <Link
                                    to="/vendor-list"
                                    onClick={hideVendorMenu}
                                  >
                                    <span className="flex items-center">
                                      <TfiViewListAlt />
                                      <span className="ml-2">Vendor List</span>
                                    </span>
                                  </Link>
                                </li>
                                <li className="text-black px-3 py-1 border-t my-1 hover:translate-x-1 hover:text-primary duration-300">
                                  <Link
                                    to="/vendor-details"
                                    onClick={hideVendorMenu}
                                  >
                                    <span className="flex items-center">
                                      <TbListDetails />
                                      <span className="ml-2">
                                        Vendor-Details
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                    </div>
                  </nav>
                  {/* Pages menu */}
                  <nav>
                    <div
                      className="py-3 group relative cursor-pointer"
                      onMouseEnter={PagesMenu}
                      onMouseLeave={PagesMenu}
                    >
                      <li className=" group-hover:bg-primary group-hover:text-secondary px-3 py-1 rounded-md">
                        <h1 className="flex items-center cursor-pointer ">
                          {" "}
                          <span className="mr-1">
                            <RiPagesLine />
                          </span>{" "}
                          Pages
                        </h1>
                        <div className="absolute z-50 left-0 mt-2 group-hover:translate-y-2 duration-500">
                          {pagesVisible && (
                            <div className=" bg-white rounded-md space-y-1 p-3">
                              <ul className="w-32">
                                <li className="text-black px-3 py-1 hover:translate-x-1 hover:text-primary duration-300">
                                  <Link to="/about" onClick={hidePagesMenu}>
                                    <span className="flex items-center">
                                      <BsInfoSquare />
                                      <span className="ml-2">About</span>
                                    </span>
                                  </Link>
                                </li>
                                <li className="text-black px-3 border-t my-1 py-1 hover:translate-x-1 hover:text-primary duration-300">
                                  <Link to="/contact" onClick={hidePagesMenu}>
                                    <span className="flex items-center">
                                      <RiContactsLine />
                                      <span className="ml-2">Contact</span>
                                    </span>
                                  </Link>
                                </li>
                                <li className="text-black px-3 border-t my-1 py-1 hover:translate-x-1 hover:text-primary duration-300">
                                  <Link to="/login" onClick={hidePagesMenu}>
                                    <span className="flex items-center">
                                      <BiLogIn />
                                      <span className="ml-2">LogIn</span>
                                    </span>
                                  </Link>
                                </li>
                                <li className="text-black px-3 border-t my-1 py-1 hover:translate-x-1 hover:text-primary duration-300">
                                  <Link to="/faq" onClick={hidePagesMenu}>
                                    <span className="flex items-center">
                                      <FaQuestion />
                                      <span className="ml-2">FAQ</span>
                                    </span>
                                  </Link>
                                </li>
                                <li className="text-black px-3 border-t my-1 py-1 hover:translate-x-1 hover:text-primary duration-300">
                                  <Link
                                    to="/error-page"
                                    onClick={hidePagesMenu}
                                  >
                                    <span className="flex items-center">
                                      <BiMessageAltError />
                                      <span className="ml-2">Page 404</span>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                    </div>
                  </nav>
                  {/* login button */}
                  <div className="hover:bg-primary hover:text-secondary px-3 py-1 rounded-md">
                    <li className="flex items-center">
                      <span className="mr-1">
                        <BiLogIn />
                      </span>
                      <Link to="/login">Login</Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile device */}
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
