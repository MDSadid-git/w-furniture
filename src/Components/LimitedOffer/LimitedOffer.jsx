import { useEffect, useState } from "react";
import table from "../../assets/ProductImage/table.png";

const LimitedOffer = () => {
  const [timeOver, setTimeOver] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("6/15/2023  14:09:59");

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setTimeOver(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" my-10">
      <h1 className="text-primary text-4xl font-semibold my-5">
        Limited Offer
      </h1>
      {timeOver ? (
        <h1 className="text-3xl font-semibold my-5 text-gray-800">
          This week lemited offer finished
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-secondary p-5 rounded-md">
          <div className="border ">
            <div className="flex flex-col justify-center border border-primary h-80 w-80 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px] p-10 rounded-[50%] mx-auto">
              <div>
                <h1 className="font-bold text-xl lg:text-3xl text-center text-primary my-3 md:tracking-[3px]">
                  OFFER OF THE WEEK
                </h1>
                <p className="font-semibold lg:text-2xl text-center my-3 text-primary">
                  Dining Table
                </p>
                <p className="font-semibold lg:text-2xl text-center my-3 text-primary">
                  $1200.00
                </p>
              </div>
              <div className="flex justify-center mt-3">
                <div className="ml-2">
                  <button className="p-3 h-16 w-16 bg-white rounded-full font-semibold text-xl md:text-3xl  text-primary">
                    {days}
                  </button>
                  <h1 className="text-center md:tracking-[3px] mt-2">DAYS</h1>
                </div>
                <div className="ml-2">
                  <button className="p-3 h-16 w-16 bg-white rounded-full font-semibold text-xl md:text-3xl  text-primary">
                    {hours}
                  </button>
                  <h1 className="text-center md:tracking-[3px] mt-2">HOURS</h1>
                </div>
                <div className="ml-2">
                  <button className="p-3 h-16 w-16 bg-white rounded-full font-semibold text-xl md:text-3xl  text-primary">
                    {minutes}
                  </button>
                  <h1 className="text-center md:tracking-[3px] mt-2">MIN</h1>
                </div>
                <div className="ml-2">
                  <button className="p-3 h-16 w-16 bg-white rounded-full font-semibold text-xl md:text-3xl  text-primary">
                    {seconds}
                  </button>
                  <h1 className="text-center md:tracking-[3px] mt-2">SEC</h1>
                </div>
              </div>
              <div className="flex justify-center md:mt-5 mt-2">
                <button className="bg-primary hover:bg-gray-800 duration-300 md:px-5 px-2 py-1 md:py-2 rounded-full text-secondary md:text-xl font-semibold">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={table} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LimitedOffer;
