import { useEffect, useState } from "react";
import SmallSlider2 from "../SmallSlider/SmallSlider2";
import SmallSlider from "../SmallSlider/SmallSlider";
import offerbg2 from '../../../assets/ProductImage/offerbg2.jpg'

const OfferSlider2 = () => {
  const [timeOver, setTimeOver] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("6/15/2023  1:09:59");

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-2 md:px-10 py-10">
      {/* Slider */}
      <div className="lg:col-span-2 lg:order-1 order-2 relative ">
        <SmallSlider />
      </div>
      {/* timer */}
      <div className="lg:col-span-1 lg:order-2 order-1 relative group overflow-hidden">
       
        <div
          className="bg-cover bg-center h-[450px] bg-no-repeat rounded w-full"
          style={{
            backgroundImage:
              `url(${offerbg2})`,
          }}
        >
          <div className="">
            {timeOver ? (
              <h1 className="text-3xl font-semibold my-5 text-gray-800">
                This week limited offer finished
              </h1>
            ) : (
              <div className="flex flex-col justify-center items-center h-[450px]">
                <div>
                  <h1 className="text-2xl font-semibold uppercase text-center mb-5">
                    Our weekend <br /> Offers
                  </h1>
                  <div className="flex">
                    <div className="text-center border-r-4 border-primary px-2">
                      <h1 className="text-2xl font-bold">{days}</h1>
                      <h1 className="uppercase text-md font-semibold">Days</h1>
                    </div>
                    <div className="text-center border-r-4 border-primary px-2">
                      <h1 className="text-2xl font-bold">{hours}</h1>
                      <h1 className="uppercase text-md font-semibold">hours</h1>
                    </div>
                    <div className="text-center border-r-4 border-primary px-2">
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
    </div>
  );
};

export default OfferSlider2;
