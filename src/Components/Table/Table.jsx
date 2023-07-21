import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import sofa3 from '../../assets/ProductImage/sofa3.jpg';
import sofa4 from '../../assets/ProductImage/sofa4.jpg';
import bed3 from '../../assets/ProductImage/bed3.jpg';
import light1 from '../../assets/ProductImage/light1.jpg';
import dining2 from '../../assets/ProductImage/dining2.jpg';

const Table = () => {
  const { pathname } = useLocation();

  console.log(location.pathname);
  return (
    <div className="overflow-auto">
      <table className="w-full max-w-7xl border mx-auto table-auto">
        <thead className="border-b">
          <tr>
            <th className="py-3">Image</th>
            <th className="py-3">Product</th>
            <th className="py-3">Price</th>

            {pathname.includes("cart") ? (
              <>
                <th className="py-3">Quantity</th>
                <th className="py-3">Pay</th>
                <th className="py-3">Action</th>
              </>
            ) : (
              <>
                <th className="py-3">Add</th>
                <th className="py-3">Pay</th>
                <th className="py-3">Action</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border-b text-sm md:text-lg">
            <th>
              {" "}
              <img
                className="w-12 md:w-24 h-12 md:h-24 mx-auto rounded-full p-1"
                src={sofa3}
                alt=""
              />{" "}
            </th>
            <td>Rocking Chair</td>
            <td>$1200.00</td>

            {pathname.includes("cart") ? (
              <>
                <td>1</td>
                <td>
                <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    Payment
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold  my-3 py-2 px-3"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineShoppingCart />{" "}
                  </button>
                </td>
                <td>
                  <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4"
                    type="submit"
                  >
                    Checkout
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr className="text-center border-b text-sm md:text-lg">
            <th>
              {" "}
              <img
                className="w-12 md:w-24 h-12 md:h-24 mx-auto rounded-full p-1"
                src={light1}
                alt=""
              />{" "}
            </th>
            <td>Two bed</td>
            <td>$1800.00</td>
            {pathname.includes("cart") ? (
              <>
                <td>1</td>
                <td>
                <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    Payment
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold  my-3 py-2 px-3"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineShoppingCart />{" "}
                  </button>
                </td>
                <td>
                <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4"
                    type="submit"
                  >
                    Checkout
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr className="text-center border-b text-sm md:text-lg">
            <th>
              {" "}
              <img
                className="w-12 md:w-24 h-12 md:h-24 mx-auto rounded-full p-1"
                src={dining2}
                alt=""
              />{" "}
            </th>
            <td>Office Chair</td>
            <td>$1900.00</td>
            {pathname.includes("cart") ? (
              <>
                <td>1</td>
                <td>
                <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    Payment
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold my-3 py-2 px-3"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineShoppingCart />{" "}
                  </button>
                </td>
                <td>
                <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4"
                    type="submit"
                  >
                    Checkout
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr className="text-center border-b text-sm md:text-lg">
            <th>
              {" "}
              <img
                className="w-12 md:w-24 h-12 md:h-24 mx-auto rounded-full p-1"
                src={bed3}
                alt=""
              />{" "}
            </th>
            <td>Two bed</td>
            <td>$1800.00</td>
            {pathname.includes("cart") ? (
              <>
                <td>1</td>
                <td>
                <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    Payment
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold  my-3 py-2 px-3"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineShoppingCart />{" "}
                  </button>
                </td>
                <td>
                <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4"
                    type="submit"
                  >
                    Checkout
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr className="text-center border-b text-sm md:text-lg">
            <th>
              {" "}
              <img
                className="w-12 md:w-24 h-12 md:h-24 mx-auto rounded-full p-1"
                src={sofa4}
                alt=""
              />{" "}
            </th>
            <td>Rocking Chair</td>
            <td>$1200.00</td>

            {pathname.includes("cart") ? (
              <>
                <td>1</td>
                <td>
                  <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    Payment
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold  my-3 py-2 px-3"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineShoppingCart />{" "}
                  </button>
                </td>
                <td>
                <Link to='/checkout'>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded-2xl font-semibold text-xs my-3 py-2 px-4"
                    type="submit"
                  >
                    Checkout
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className=" text-center transition duration-500 hover:bg-[#333533] hover:text-white text-red-700 rounded font-semibold text-sm my-3 py-1 px-3"
                    type="submit"
                  >
                    {" "}
                    <ImCross />{" "}
                  </button>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
