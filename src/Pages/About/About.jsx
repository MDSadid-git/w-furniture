import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Promises from "../Home2/Promises/Promises";
import BannerTitle from "../../Components/TitlePage/BannerTitle";
import designer1 from "../../assets/ProductImage/designer1.jpg";
import designer2 from "../../assets/ProductImage/designer2.jpg";
import designer3 from "../../assets/ProductImage/designer3.jpg";
import member1 from "../../assets/ProductImage/member1.jpg";
import member2 from "../../assets/ProductImage/member2.jpg";
import member3 from "../../assets/ProductImage/member3.jpg";
import member4 from "../../assets/ProductImage/member4.jpg";
import member5 from "../../assets/ProductImage/member5.jpg";
import member6 from "../../assets/ProductImage/member6.jpg";

const About = () => {
  return (
    <div>
      <BannerTitle title="About Us" />
      <div className="max-w-screen-2xl mx-auto">
        <div className="py-5 lg:py-10">
          <h1 className="text-center italic text-3xl text-primary font-semibold">
            Weero Furniture
          </h1>
          <p className="text-center mt-5 lg:mt-10 lg:text-4xl">
            Designed with the modern family in mind, <br />{" "}
            <span className="text-primary">Weero Furniture </span>
            considered every aspect of <br /> the Patch table to ensure maximum
            functionality.
          </p>
        </div>
        {/* table list */}
        <div className="">
          {/* First grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 gap-5  py-10">
            <div>
              <img src={designer1} alt="" className="w-full h-96" />
            </div>
            <div className="lg:py-10 px-2">
              <h1 className="text-4xl mb-10">We’re different by design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, inventore minus in eligendi optio saepe impedit
                magnam consectetur cum veniam nobis, distinctio repellendus
                quaerat consequatur vitae harum commodi sunt facilis cupiditate
                sequi vero quidem dignissimos? Minus eveniet velit, assumenda
                reiciendis explicabo corporis? Sit iure eveniet omnis numquam
                ad, placeat mollitia!
              </p>
            </div>
          </div>
          {/* Second Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 gap-5  py-10">
            <div className=" order-1 md:order-2">
              <img src={designer2} alt="" className="w-full h-96" />
            </div>
            <div className="lg:py-10 order-2 md:order-1 px-2">
              <h1 className="text-4xl mb-10">We’re different by design</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                harum, magni molestiae, eius odit distinctio asperiores
                laboriosam reiciendis eaque, adipisci ea hic quia? Ipsam
                voluptatibus quaerat modi minus esse eaque dolores maiores
                assumenda dolorem aut vero mollitia, exercitationem velit. Nihil
                impedit ullam molestias quis quas voluptas aperiam ab doloremque
                necessitatibus!
              </p>
            </div>
          </div>
          {/* 3rd grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 gap-5  py-10">
            <div>
              <img src={designer3} alt="" className="w-full h-96" />
            </div>
            <div className="lg:py-10 px-2">
              <h1 className="text-4xl mb-10">
                We support independent designers
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                voluptatum repellendus alias accusantium distinctio vel fuga
                ipsam eligendi nisi aperiam voluptate nemo placeat repellat
                debitis voluptatem, architecto ab dolorem quas cupiditate
                reiciendis. Unde commodi aliquam assumenda. Saepe repudiandae
                dolorem ad soluta voluptas? Expedita voluptates culpa rerum
                natus veniam neque laborum?
              </p>
            </div>
          </div>
        </div>
        {/* team members */}
        <div className="py-10 ">
          <h1 className="text-center italic text-3xl text-primary font-semibold mb-10">
            Our Team Members
          </h1>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${member1})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Jhon Smith</h1>
                <p>Designer</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${member2})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Gibs hornet</h1>
                <p>CEO</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${member3})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Tail cooks</h1>
                <p>Art-Maneger</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${member4})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Kim tail</h1>
                <p>Co-Founder</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${member5})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Jim Carry</h1>
                <p>Designer</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="h-72 w-full bg-cover bg-top bg-no-repeat md:scale-90 group-hover:scale-100 duration-300 md:opacity-70 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${member6})`,
                }}
              >
                <div className="h-full bg-primary opacity-20"></div>
              </div>
              <div className="text-center">
                <h1 className="text-primary text-2xl">Jhon Smith</h1>
                <p>Designer</p>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 duration-300">
                <div className="flex justify-center space-x-4 mt-3 ">
                  <FiFacebook className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiTwitter className="cursor-pointer hover:text-primary text-xl duration-300" />
                  <FiInstagram className="cursor-pointer hover:text-primary text-xl duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* promises */}
        <Promises />
      </div>
    </div>
  );
};

export default About;
