import React from "react";
import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md overflow-scroll text-sm scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* story */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-thin">Harish</span>
              </div>
              <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-thin">Harish</span>
              </div>
              <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-thin">Harish</span>
              </div>
              <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-thin">Harish</span>
              </div>
              <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-thin">Harish</span>
              </div>
              <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-thin">Harish</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
