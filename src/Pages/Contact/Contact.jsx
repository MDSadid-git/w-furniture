import { CiLocationOn } from "react-icons/ci";
import BannerTitle from "../../Components/TitlePage/BannerTitle";
import { AiOutlineMail } from "react-icons/ai";
import { TbClockHour3 } from "react-icons/tb";

const Contact = () => {
  return (
    <div>
      <BannerTitle title="Contact Us" />

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto gap-5 px-3">
        <div className="">
          <h1 className="text-3xl text-primary font-semibold mb-5">
            We love to Hear from your
          </h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            quidem, molestiae mollitia laborum iure earum odio modi ratione
            quasi id?
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-gray-50 py-3 px-2">
              <h1 className="text-xl font-semibold">Our Office</h1>
              <div className="flex items-center space-x-2">
                <CiLocationOn className="text-3xl text-primary" />
                <p>
                  House #2, Block #C, <br /> Mirpur 2, Dhaka-1216
                </p>
              </div>
            </div>
            <div className="bg-gray-50 py-3 px-2">
              <h1 className="text-xl font-semibold">Contact information</h1>
              <div className="flex items-center space-x-2">
                <AiOutlineMail className="text-3xl text-primary" />
                <div>
                  <p>email: weerodigital@gmail.com</p>
                  <p>Phone: +880 171 095593</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 py-3 px-2">
              <h1 className="text-xl font-semibold">Office Hours</h1>
              <div className="flex items-center space-x-2">
                <TbClockHour3 className="text-3xl text-primary" />
                <div>
                  <p>Sat - Thu</p>
                  <p>10 AM to 7 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div>
          <form>
            <div className="mb-5">
              <h1 className="text-3xl text-primary font-semibold">
                Leave a Message
              </h1>
            </div>
            <p>Use the form below to get in touch with Us</p>
            <div className="flex mt-10">
              <div className="w-[50%]">
                <span className="uppercase block text-left text-sm  font-bold">
                  Full Name*
                </span>
                <input
                  name="name"
                  className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  type="text"
                />
              </div>
              <div className="w-[50%] ml-3">
                <span className="uppercase block text-left  text-sm  font-bold">
                  Number*
                </span>
                <input
                  name="name"
                  className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3   leading-tight   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  type="number"
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="uppercase text-sm block text-left  font-bold">
                Email*
              </span>
              <input
                name="email"
                className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3  leading-tight   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="email"
              />
            </div>
            <div className="mt-4">
              <span className="uppercase text-sm block text-left  font-bold">
                Message
              </span>
              <textarea
                name="message"
                className="shadow form-textarea mt-1 block border rounded w-full h-40 py-2 px-3  leading-tight   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="uppercase text-sm hover:bg-gray-800 duration-300 font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* form end */}
      </div>
      <div className="mb-16">
        <div className="w-full h-96 mt-3 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3482689250204!2d90.35367527506733!3d23.80621167863229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c162749924dd%3A0x4d0b750e1fcaea7c!2sWeero%20Digital!5e0!3m2!1sen!2sbd!4v1683634586464!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
