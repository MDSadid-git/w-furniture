import { Link } from "react-router-dom";

const BannerTitle = ({ title }) => {
  return (
    <div>
      <div
        className="w-full h-72 bg-cover bg-no-repeat bg-bottom"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className=" flex flex-col justify-center items-center text-secondary h-full">
          <h1 className="text-6xl font-semibold">{title}</h1>
          <ul className="flex space-x-2 text-xl">
            <li className="hover:-translate-x-2 duration-300">
              <Link to="/">Home</Link>
            </li>
            <li>{">"}</li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
