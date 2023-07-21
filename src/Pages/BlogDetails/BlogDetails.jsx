import React from "react";
import Reveiw from "../Component/ProductDetails/Reveiw";
import SortReview from "../Component/SortReview";
import { SiBlogger } from "react-icons/si";
import BreadCump from "../Component/BreadCump";
import Images from "../Component/Images";

const BlogDetails = () => {
  return (
    <div className=" p-4">
      <BreadCump />
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto  rounded">
        <div className="md:w-4/6 mr-3">
          <div className="bg-white p-4 my-5 rounded">
            <Images
              imgsrc="./assets/cheery-little-girl-sitting-shopping-cart.jpg"
              alt=""
            />
            <h1 className="text-3xl font-semibold my-5 text-green-600">Grocery</h1>
            <h1 className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              possimus laudantium suscipit optio aspernatur, iure earum et esse
              assumenda error, perferendis a? A nam fugit dignissimos placeat
              velit quos voluptatum. Enim, quas dicta. Atque sunt quisquam animi
              tenetur debitis dolores ipsum, error culpa! Quasi, a. Accusantium
              ratione incidunt quo voluptas laudantium voluptate, odio delectus
              saepe voluptatem! Eum, consequatur distinctio ut natus earum iure
              eos facilis, unde dicta est aliquam optio labore nulla quibusdam
              eveniet neque deleniti quasi laborum. Id ducimus repellat odit,
              quis incidunt eaque cupiditate nam soluta est, debitis dolorem
              dignissimos commodi laborum vel nobis aliquam ex facilis
              molestias.
            </h1>

            <p className="font-semibold my-5 border-l-4 border-green-600 pl-4 ml-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              sunt ex pariatur eveniet. Dolor itaque praesentium laborum
              perferendis nulla eos fugit odit vitae delectus ducimus error,
              expedita tenetur alias a minima nostrum aut deleniti veritatis
              reiciendis non perspiciatis, nam accusamus excepturi veniam!
              Possimus error aut omnis nesciunt libero! Vitae, commodi!
            </p>
            <h1 className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              possimus laudantium suscipit optio aspernatur, iure earum et esse
              assumenda error, perferendis a? A nam fugit dignissimos placeat
              velit quos voluptatum. Enim, quas dicta. Atque sunt quisquam animi
              tenetur debitis dolores ipsum, error culpa! Quasi, a. Accusantium
              ratione incidunt quo voluptas laudantium voluptate, odio delectus
              saepe voluptatem! Eum, consequatur distinctio ut natus earum iure
              eos facilis, unde dicta est aliquam optio labore nulla quibusdam
              eveniet neque deleniti quasi laborum. Id ducimus repellat odit,
              quis incidunt eaque cupiditate nam soluta est, debitis dolorem
              dignissimos commodi laborum vel nobis aliquam ex facilis
              molestias.
            </h1>
            <SortReview />
            <form className="mt-3 p-3 ">
              <lebel className="font-semibold">Comment</lebel>
              <textarea
                className="w-full border focus:border-green-600 focus:outline-none rounded my-3 p-3"
                name="comment"
                id=""
                cols="30"
                rows="5"
                placeholder="Comment"
              ></textarea>
              <div className="my-2">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="my-2">
                <label className="font-semibold">Email Address</label>
                <input
                  type="email"
                  className="w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="my-2">
                <label className="font-semibold">Website (Optinal)</label>
                <input
                  type="text"
                  className="w-full border focus:border-green-600 focus:outline-none p-2 my-2 rounded"
                  placeholder="Website"
                  required
                />
              </div>

              <div className="mt-5">
                <button className=" bg-green-600 py-3 px-5 rounded text-white font-semibold">
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-2/6">
          <div className="shadow-lg px-3 py-6 my-10 rounded-md">
            <h1 className="font-semibold text-2xl py-5 border-b text-green-600">
              Blog cetegory
            </h1>
            <div className="flex justify-between border-b hover:border-none hover:shadow-md  px-3 rounded py-2 cursor-pointer">
              <div className="flex justify-center items-center ">
                <p className="text-[#26901b]">
                  <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-[#26901b]">
                  Muffins & Donuts
                </p>
              </div>
              <p>45</p>
            </div>
            <div className="flex justify-between border-b hover:border-none hover:shadow-md  px-3 rounded py-2 cursor-pointer">
              <div className="flex justify-center items-center ">
                <p className="text-[#26901b]">
                  <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-[#26901b]">Snack Cakes</p>
              </div>
              <p>98</p>
            </div>
            <div className="flex justify-between border-b hover:border-none hover:shadow-md  px-3 rounded py-2 cursor-pointer">
              <div className="flex justify-center items-center ">
                <p className="text-[#26901b]">
                  <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-[#26901b]">Custom Cake</p>
              </div>
              <p>67</p>
            </div>
            <div className="flex justify-between border-b hover:border-none hover:shadow-md  px-3 rounded py-2 cursor-pointer">
              <div className="flex justify-center items-center ">
                <p className="text-[#26901b]">
                  <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-[#26901b]">
                  Instant Coffee
                </p>
              </div>
              <p>32</p>
            </div>
            <div className="flex justify-between border-b hover:border-none hover:shadow-md  px-3 rounded py-2 cursor-pointer">
              <div className="flex justify-center items-center cursor-pointer">
                <p className="text-[#26901b]">
                  <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-[#26901b]">Cold Coffee</p>
              </div>
              <p>72</p>
            </div>
            <div className="flex justify-between border-b hover:border-none hover:shadow-md  px-3 rounded py-2 cursor-pointer">
              <div className="flex justify-center items-center cursor-pointer">
                <p className="text-[#26901b]">
                  <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-[#26901b]">
                  Frozen Breakfast
                </p>
              </div>
              <p>27</p>
            </div>
            <div className="flex justify-between border-b hover:border-none hover:shadow-md  px-3 rounded py-2 cursor-pointer">
              <div className="flex justify-center items-center ">
                <p className="text-[#26901b]">
                  <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-[#26901b]">Meet & Fish</p>
              </div>
              <p>22</p>
            </div>
          </div>
          <div className="shadow-lg px-3 my-10">
            <h1 className="font-semibold text-2xl my-5 text-green-600">Popular Posts</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-5 p-3 border-t hover:shadow-lg cursor-pointer group hover:bg-primery duration-300 ">
              <Images
                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                imgsrc="./assets/man-woman-shopping-grocery-store-min.jpg"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-xl mb-1 group-hover:text-white">
                  Due Jhonson
                </h1>
                <h1 className="text-sm group-hover:text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  ipsa consequatur perferendis quos exercitationem provident.
                </h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-5 border-t p-3 hover:shadow-lg cursor-pointer group hover:bg-primery duration-300">
              <Images
                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                imgsrc="./assets/man-woman-shopping-grocery-store-min.jpg"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-xl mb-1 group-hover:text-white">
                  Due Jhonson
                </h1>
                <h1 className="text-sm group-hover:text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  ipsa consequatur perferendis quos exercitationem provident.
                </h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-5 p-3 border-t hover:shadow-lg cursor-pointer group hover:bg-primery duration-300">
              <img
                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                src="./assets/man-woman-shopping-grocery-store-min.jpg"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-xl mb-1 group-hover:text-white">
                  Due Jhonson
                </h1>
                <h1 className="text-sm group-hover:text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  ipsa consequatur perferendis quos exercitationem provident.
                </h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-5 border-t p-3 hover:shadow-lg cursor-pointer group hover:bg-primery duration-300">
              <Images
                className="w-full lg:w-24 lg:h-24 rounded mr-4"
                imgsrc="./assets/man-woman-shopping-grocery-store-min.jpg"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-xl my-3 group-hover:text-white">
                  Due Jhonson
                </h1>
                <h1 className="text-sm group-hover:text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  ipsa consequatur perferendis quos exercitationem provident.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
