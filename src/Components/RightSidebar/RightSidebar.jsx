import RightSidebarContent from "./RightSidebarContent";
import { BiBed } from "react-icons/bi";

const RightSidebar = () => {
  return (
    <div className="border p-2">
      <>
        <RightSidebarContent
          className=" mb-3 font-dm text-2xl py-5  border-b text-primary"
          titel="Furniture Categories"
          mydropdown={false}
        />
        <RightSidebarContent
          className="p-2 border-b hover:bg-primary hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
          titel="Dining Room"
          mydropdown={false}
        />

        <RightSidebarContent
          className="p-2 border-b hover:bg-primary hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
          titel="Bed Room"
          icon={<BiBed />}
          mydropdown={false}
        />
        <RightSidebarContent
          className="p-2 border-b hover:bg-primary hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
          titel="Single Room"
          mydropdown={false}
        />
        <RightSidebarContent
          className="p-2 border-b hover:bg-primary hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
          titel="Chair"
          mydropdown={false}
        />
        <RightSidebarContent
          className="p-2 border-b hover:bg-primary hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
          titel="Lights"
          mydropdown={false}
        />

        <RightSidebarContent
          className="p-2 border-b hover:bg-primary hover:text-white duration-300 hover:translate-x-1 cursor-pointer rounded font-dm text-base"
          titel=" Table"
          mydropdown={false}
        />
      </>
    </div>
  );
};

export default RightSidebar;
