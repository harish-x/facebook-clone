import React from "react";
import Link from "next/link";
import Image from "next/image";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        <div className="flex items-center justify-between font-medium">
          <span className="text-gray-500">User Media</span>
          <Link href={"/"} className="text-blue-500 text-xs">
            See all
          </Link>
        </div>
        <div className="flex gap-4 justify-between flex-wrap">
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/photos/28772388/pexels-photo-28772388/free-photo-of-majestic-obergurgl-alpine-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/photos/28772388/pexels-photo-28772388/free-photo-of-majestic-obergurgl-alpine-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-1/4 h-24">
            <Image
              src="https://images.pexels.com/photos/28772388/pexels-photo-28772388/free-photo-of-majestic-obergurgl-alpine-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMediaCard;
