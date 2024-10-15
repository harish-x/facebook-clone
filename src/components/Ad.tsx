import Image from "next/image";
import React from "react";

type sizeT = {
  size: "sm" | "md" | "lg";
};

const Ad = ({ size }: sizeT) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="">Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} className="" />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/28772388/pexels-photo-28772388/free-photo-of-majestic-obergurgl-alpine-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className=" rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/28772388/pexels-photo-28772388/free-photo-of-majestic-obergurgl-alpine-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={24}
            height={25}
            className=" rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Sponser name</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size == "sm"
            ? "lorem 10"
            : size === "md"
            ? "lorelmipsum long"
            : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni praesentium odio officiis? Rerum eos tempora qui quo cum. Molestiae et asperiores debitis? Dolore beatae ab tenetur, quam distinctio minus quos"}
              </p>
              <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Lorem</button>
      </div>
    </div>
  );
};

export default Ad;
