import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Faq from "../Pages/Faq/Faq";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import BlogLilst from "../Pages/Blog/BlogLilst";
import BlogPostGallery from "../Pages/Blog/BlogPostGallery";
import BlogGallaryLeftSideBar from "../Pages/Blog/BlogGallaryLeftSideBar";
import Home2 from "../Pages/Home2/Home2";
import AllVendors from "../Pages/Vendors/AllVendors/AllVendors";
import VendorDetails from "../Pages/Vendors/VendorDetails/VendorDetails";
import ProductImageRight from "../Pages/ProductImageRight/ProductImageRight";
import ProductImageBottom from "../Pages/ProductImageBottom/ProductImageBottom";
import ProductFilterDrawar from "../Pages/ProductFilterDrawar/ProductFilterDrawar";
import ProductSliders from "../Pages/ProductSilders/ProductSliders";
import CartPage from "../Pages/CartPage/CartPage";
import Wishlist from "../Pages/Wishlist/Wishlist";
import CheckOutPage from "../Pages/CheckoutPage/CheckOutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home-2",
        element: <Home2 />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product-image-right",
        element: <ProductImageRight />,
      },
      {
        path: "/product-image-bottom",
        element: <ProductImageBottom />,
      },
      {
        path: "/product-filter",
        element: <ProductFilterDrawar />,
      },
      {
        path: "/product-sliders",
        element: <ProductSliders />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/vendor-list",
        element: <AllVendors />,
      },
      {
        path: "/vendor-details",
        element: <VendorDetails />,
      },
      {
        path: "/blog-list",
        element: <BlogLilst />,
      },
      {
        path: "/blog-gallery",
        element: <BlogPostGallery />,
      },
      {
        path: "/blog-gallery-leftsidebar",
        element: <BlogGallaryLeftSideBar />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/error-page",
        element: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
    ],
  },
]);
