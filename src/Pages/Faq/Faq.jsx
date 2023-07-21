import BannerTitle from "../../Components/TitlePage/BannerTitle";
import Promises from "../Home2/Promises/Promises";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div>
      <BannerTitle title="FAQ’s" />
      <div className=" max-w-screen-md mx-auto py-10">
        <div className="py-10">
          <h1 className="text-center uppercase text-primary text-3xl font-semibold">
            Frequently asked questions
          </h1>
        </div>
        <div className="">
          <div className="space-y-4">
            <Accordion
              title="Order Query"
              details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum."
            ></Accordion>
            <Accordion
              title="Delivery information"
              details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum."
            ></Accordion>
            <Accordion
              title="Payment & Promos"
              details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum."
            ></Accordion>
            <Accordion
              title="Return and Refunds"
              details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum."
            ></Accordion>
            <Accordion
              title="Order Query"
              details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum."
            ></Accordion>
            <Accordion
              title="Delivery information"
              details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum."
            ></Accordion>
            <Accordion
              title="Payment & Promos"
              details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum."
            ></Accordion>
            <Accordion
              title="Return and Refunds"
              details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                odit libero quia nostrum? Minus dolores temporibus atque odio
                laudantium voluptatum."
            ></Accordion>
          </div>
        </div>
      </div>
      <Promises />
    </div>
  );
};

export default Faq;
