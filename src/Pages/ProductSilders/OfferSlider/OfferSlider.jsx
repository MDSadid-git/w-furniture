import { useEffect, useState } from "react";
import SmallSlider from "../SmallSlider/SmallSlider";
import offerbg1 from '../../../assets/ProductImage/offerbg1.jpg'

const OfferSlider = () => {
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
    <div>
      {/* first counter slider */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-2 md:px-10 py-10">
        {/* timer */}
        <div className="lg:col-span-1">
          <div
            className="bg-cover h-[450px] bg-no-repeat rounded w-full relative group overflow-hidden"
            style={{
              backgroundImage:
                `url(${offerbg1})`,
            }}
          >
            <div className="absolute top-0 rounded-md group-hover:left-0 duration-700 left-[600px] flex justify-center items-center opacity-90 h-full w-full bg-primary"></div>
            <div className="">
              {timeOver ? (
                <h1 className="text-3xl font-semibold my-5 text-gray-800">
                  This week limited offer finished
                </h1>
              ) : (
                <div className="flex flex-col justify-center items-center h-[450px] group-hover:text-white">
                  <div className="z-50">
                    <h1 className="text-2xl font-semibold uppercase text-center mb-5">
                      Our weekend <br /> Offers
                    </h1>
                    <div className="flex">
                      <div className="text-center border-r-4 border-primary group-hover:border-secondary px-2">
                        <h1 className="text-2xl font-bold">{days}</h1>
                        <h1 className="uppercase text-md font-semibold">
                          Days
                        </h1>
                      </div>
                      <div className="text-center border-r-4 border-primary group-hover:border-secondary px-2">
                        <h1 className="text-2xl font-bold">{hours}</h1>
                        <h1 className="uppercase text-md font-semibold">
                          hours
                        </h1>
                      </div>
                      <div className="text-center border-r-4 border-primary group-hover:border-secondary px-2">
                        <h1 className="text-2xl font-bold">{minutes}</h1>
                        <h1 className="uppercase text-md font-semibold">
                          minutes
                        </h1>
                      </div>
                      <div className="text-center px-2">
                        <h1 className="text-2xl font-bold">{seconds}</h1>
                        <h1 className="uppercase text-md font-semibold">
                          seconds
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="lg:col-span-2">
          <SmallSlider />
        </div>
      </div>
      {/* 2nd counter slider */}
    </div>
  );
};

export default OfferSlider;
