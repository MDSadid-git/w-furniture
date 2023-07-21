import { useState } from "react";

const Accordion = ({ title, details }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b ">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className={`flex hover:bg-primary group hover:text-secondary rounded-md items-center justify-between w-full p-4 focus:outline-none ${open && 'bg-primary text-white'}`}
        onClick={() => setOpen(!open)}
      >
        <p className="text-lg font-medium ">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-800 group-hover:text-secondary transform transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`p-0 pt-0 overflow-hidden duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-gray-800 py-3">{details}</p>
      </div>
    </div>
  );
};

export default Accordion;
