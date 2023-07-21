import React from 'react';
import { AiOutlineHome, AiOutlineLayout, AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai';
import { BiDownArrow, BiImage, BiLogIn, BiMessageAltError, BiPhoneCall, BiRightArrow } from 'react-icons/bi';
import { BsFilterLeft, BsGrid1X2, BsInfoSquare, BsLayoutSidebarReverse, BsReverseLayoutSidebarReverse, BsReverseLayoutTextSidebarReverse, BsShop } from 'react-icons/bs';
import { CiBoxList } from 'react-icons/ci';
import { FaQuestion } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { MdOutlineMail } from 'react-icons/md';
import { RiContactsLine, RiPagesLine } from 'react-icons/ri';
import { TbBrandBlogger, TbListDetails } from 'react-icons/tb';
import { TfiLayoutAccordionList, TfiLayoutGrid2Thumb, TfiLayoutSlider, TfiViewListAlt } from 'react-icons/tfi';
import { VscLayoutPanelOff } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';
import { navItem } from '../../Layout/Navbar/Navbar';
import { useState } from 'react';
import logo from '../../assets/ProductImage/logo.png'

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [home, setHome] = useState(false);
    const [shop, setShop] = useState(false);
    const [blog, setBlog] = useState(false);
    const [vendor, setVendor] = useState(false);
    const [pages, setPages] = useState(false);
    const [shopLayout, setShopLayout] = useState(false);
    const [productLayout, setProductLayout] = useState(false);
    const [productImage, setProductImage] = useState(false);
    const [blogStyle, setBlogStyle] = useState(false);
    const [postGallery, setPostGallery] = useState(false);
    const { pathname } = useLocation();

    const toggleIsOpen = () => {
      setIsOpen((value) => !value);
    };
    return (
        <>
             <div className="lg:hidden flex justify-between mx-5 py-3 transition duration-700">
          <div className="flex justify-center items-center">
           <Link to='/'>
           <h1 className="text-lg font-semibold flex items-center">
              <img className='w-12 mr-1' src={logo} alt="" />
              WEERO <span className="text-primary">FURNITURE</span>
            </h1>
           </Link>
          </div>

          <div>
            <p
              className="flex justify-center items-center bg-white px-2 py-1 text-primary rounded cursor-pointer"
              onClick={toggleIsOpen}
            >
              <span>
                <AiOutlineMenu className="text-2xl mr-1" />
              </span>
            </p>
          </div>
        </div>
        <div className="lg:hidden">
          <div
            className={`absolute top-8 duration-700   ${isOpen ? "left-0 duration-700" : "left-[-1200px]"
              } z-30 bg-primary w-full rounded-md p-3  h-[1300px]`}
          >
            <p
              className={` absolute top-5 right-2  text-secondary py-1 cursor-pointer`}
              onClick={toggleIsOpen}
            >
              {" "}
              <span>
                <ImCross className="text-xl  mr-1" />
              </span>
            </p>
            <ul className="absolute top-8 flex flex-col justify-start md:justify-center text-white">
              <li
                className={`bg-secondary text-gray-800 ${navItem}`}
                onClick={() => setHome(!home)}
              >
                <span className="mr-1 text-lg flex items-center justify-between">
                  <AiOutlineHome />
                  <span className="ml-2">
                    Home
                  </span>
                </span>
                <span>
                  {
                    home ? <BiDownArrow /> :  <BiRightArrow />
                  }
                </span>

              </li>
              {
                home &&
                <><Link to='/'>
                <li className={`${navItem} bg-secondary text-gray-800 ml-4`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <AiOutlineHome />
                    <span className="ml-2">Home-1</span>
                  </span></li>
                </Link>
                  <Link to='/home-2'>
                  <li className={`${navItem} bg-secondary text-gray-800 ml-4`}  onClick={toggleIsOpen}>
                    <span className="mr-1 text-lg flex items-center">
                      <AiOutlineHome />
                      <span className="ml-2">Home-2</span>
                    </span></li>
                  </Link></>
              }
              <li
                className={`bg-secondary text-gray-800 ${navItem}`}
                onClick={() => setShop(!shop)}
              >
                <span className="mr-1 text-lg flex items-center justify-between">
                  <AiOutlineShopping />
                  <span className="ml-2">
                    Shop
                  </span>
                </span>
                {
                  shop ? <BiDownArrow /> :  <BiRightArrow />
                }

              </li>
              {
                shop &&
                <> <li className={`${navItem} bg-secondary text-gray-800 ml-4`} onClick={()=> setShopLayout(!shopLayout)}>
                  <span className="mr-1 text-lg flex items-center">
                    <AiOutlineLayout />
                    <span className="ml-2">Shop-Layout</span>
                  </span>
                  {
                  shopLayout ? <BiDownArrow />  : <BiRightArrow />
                }
                  </li>

                {
                  shopLayout && 
                  <>
                    <Link to='/shop'>
                    <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <BsLayoutSidebarReverse />
                    <span className="ml-2">Sidebar</span>
                  </span></li>
                    </Link>
                  <Link to='product-filter'>
                  <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <BsFilterLeft />
                    <span className="ml-2">Filter-Drawer</span>
                  </span></li>
                  </Link>
                  </>
                }
                  <li className={`${navItem} bg-secondary text-gray-800 ml-4`} onClick={()=> setProductLayout(!productLayout)}>
                  <span className="mr-1 text-lg flex items-center">
                    <AiOutlineShopping />
                    <span className="ml-2">Product-Layout</span>
                  </span>
                  {
                  productLayout ? <BiDownArrow />  : <BiRightArrow />
                }
                  </li>
                  {
                    productLayout && 
                    <>
                   <Link to='/product-sliders'>
                   <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <TfiLayoutSlider />
                    <span className="ml-2">Slider</span>
                  </span></li>
                   </Link>
                  <Link to='/shop'>
                  <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <BsGrid1X2 />
                    <span className="ml-2">Grid</span>
                  </span></li>
                  </Link>
                    </>
                  }
                  <li className={`${navItem} bg-secondary text-gray-800 ml-4`} onClick={()=> setProductImage(!productImage)}>
                  <span className="mr-1 text-lg flex items-center">
                    <BiImage />
                    <span className="ml-2">Product-Image</span>
                  </span>
                  {
                  productImage ? <BiDownArrow />  : <BiRightArrow />
                }
                  </li>
                  {
                    productImage && 
                    <>
                    <Link to='/product-image-right'>
                    <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                    <span className="mr-1 text-lg flex items-center">
                      <BsReverseLayoutSidebarReverse />
                      <span className="ml-2">Righ-Thumnail</span>
                    </span></li>
                    </Link>
                    <Link to='/product-image-bottom'>
                    <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                    <span className="mr-1 text-lg flex items-center">
                      <VscLayoutPanelOff />
                      <span className="ml-2">Bottom Thumnail</span>
                    </span></li>
                    </Link>
                    </>
                  }
                  </>
              }
              <li
                className={`bg-secondary text-gray-800 ${navItem}`}
                onClick={()=> setBlog(!blog)}
              >
                <span className="mr-1 text-lg flex items-center justify-between">
                  <TbBrandBlogger />
                  <span className="ml-2">
                    Blog
                  </span>
                </span>
                {
                  blog ? <BiDownArrow /> :  <BiRightArrow />
                }

              </li>
              {
                blog &&
                <><li className={`${navItem} bg-secondary text-gray-800 ml-4`} onClick={()=> setBlogStyle(!blogStyle)}>
                <span className="mr-1 text-lg flex items-center">
                  <CiBoxList />
                  <span className="ml-2">Blog-Style</span>
                </span>
                {
                blogStyle ? <BiDownArrow />  : <BiRightArrow />
              }
                </li>
                {
                  blogStyle && 
                  <>
                  <Link to='/blog-list'>
                  <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <TfiViewListAlt />
                    <span className="ml-2">Blog-List</span>
                  </span></li>
                  </Link>
                  <Link to='/blog'>
                  <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <BsGrid1X2 />
                    <span className="ml-2">Blog-Grid</span>
                  </span></li>
                  </Link>
                 </>
                }
                    <li className={`${navItem} bg-secondary text-gray-800 ml-4`} onClick={()=> setPostGallery(!postGallery)}>
                  <span className="mr-1 text-lg flex items-center">
                    <TfiLayoutAccordionList />
                    <span className="ml-2">Post-Layout</span>
                  </span>
                  {
                  postGallery ? <BiDownArrow />  : <BiRightArrow />
                }
                  </li>
                  {
                    postGallery && 
                    <> 
                    <Link to='blog-gallery'>
                    <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                    <span className="mr-1 text-lg flex items-center">
                      <TfiLayoutGrid2Thumb />
                      <span className="ml-2">Post-Gellary</span>
                    </span></li>
                    </Link>
                    <Link to='/blog-gallery-leftsidebar'>
                    <li className={`${navItem} text-secondary bg-gray-800 ml-8`}  onClick={toggleIsOpen}>
                    <span className="mr-1 text-lg flex items-center">
                      <BsReverseLayoutTextSidebarReverse />
                      <span className="ml-2">Left-Sidebar</span>
                    </span></li>
                    </Link>
                    </>
                  }
                 </>
              }
              <li
                className={`bg-secondary text-gray-800 ${navItem}`}
                onClick={()=> setVendor(!vendor)}
              >
                <span className="mr-1 text-lg flex items-center justify-between">
                  <BsShop />
                  <span className="ml-2">
                    Vendor
                  </span>
                </span>
                {
                  vendor ? <BiDownArrow /> :  <BiRightArrow />
                }

              </li>
              {
                vendor &&
                <>
                <Link to='/vendor-list'>
                <li className={`${navItem} text-secondary bg-gray-800 ml-4`}  onClick={toggleIsOpen}>
                <span className="mr-1 text-lg flex items-center">
                  <TfiViewListAlt />
                  <span className="ml-2">Vendor-List</span>
                </span></li>
                </Link>
                <Link to='/vendor-details'>
                <li className={`${navItem} text-secondary bg-gray-800 ml-4`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <TbListDetails />
                    <span className="ml-2">Vendor-Details</span>
                  </span></li>
                </Link>
                </>
              }
              <li
                className={`bg-secondary text-gray-800 ${navItem}`}
                onClick={()=> setPages(!pages)}
              >
                <span className="mr-1 text-lg flex items-center justify-between">
                  <RiPagesLine />
                  <span className="ml-2">
                    Pages
                  </span>
                </span>
                {
                  pages ? <BiDownArrow /> :  <BiRightArrow />
                }

              </li>
              {
                pages &&
                <>
                <Link to='/about'>
                <li className={`${navItem} text-secondary bg-gray-800 ml-4`}  onClick={toggleIsOpen}>
                <span className="mr-1 text-lg flex items-center">
                  <BsInfoSquare />
                  <span className="ml-2">About</span>
                </span></li>
                </Link>
                <Link to='/contact'>
                <li className={`${navItem} text-secondary bg-gray-800 ml-4`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <RiContactsLine />
                    <span className="ml-2">Contact</span>
                  </span></li>
                </Link>
                  <Link to='/faq'>
                  <li className={`${navItem} text-secondary bg-gray-800 ml-4`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <FaQuestion />
                    <span className="ml-2">FAQ</span>
                  </span></li>
                  </Link>
                  <Link to='/error-page'>
                  <li className={`${navItem} text-secondary bg-gray-800 ml-4`}  onClick={toggleIsOpen}>
                  <span className="mr-1 text-lg flex items-center">
                    <BiMessageAltError />
                    <span className="ml-2">Page 404</span>
                  </span></li>
                  </Link>
                  </>
              }
              <Link
                to="/login"
                className={`bg-secondary text-gray-800 ${navItem} ${pathname === "/login" && "bg-secondary text-gray-800"
                  }`}
                onClick={toggleIsOpen}
              >
                <span className="mr-1 text-lg flex items-center">
                  <BiLogIn />
                  <span className="ml-2">Login</span>
                </span>

              </Link>
              <li className="ml-1 font-semibold px-5 text-secondary">
                <div className="flex items-center">
                  <BiPhoneCall className="mr-1" />
                  <span>+8801765896545</span>
                </div>
              </li>
              <li className="ml-1 font-semibold px-5 text-secondary">
                <div className="flex items-center">
                  <MdOutlineMail className="mr-1" />
                  <span>weero@furniture.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </>
    );
};

export default MobileNavbar;