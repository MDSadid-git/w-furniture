import { useState } from "react";

const RightSidebarContent = ({ titel, mydropdown, className, icon }) => {
  let [drop, setDrop] = useState(mydropdown);
  let [show, setShow] = useState(mydropdown);
  return (
    <div>
      {drop ? (
        <div
          className="flex items-center hover:bg-primary justify-between py-3"
          onClick={() => setShow(!show)}
        >
          <h2 className={className}>{titel}</h2>
          <span>{icon}</span>
        </div>
      ) : (
        <>
          <h2 className={className}>{titel}</h2>
        </>
      )}
    </div>
  );
};

export default RightSidebarContent;
