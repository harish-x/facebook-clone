import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import Ad from "../Ad";

type typeT = {
  type: "home" | "profile";
};
const LeftMenu = ({ type }: typeT) => {
  return (
    <div className="mt-5">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2 mt-5">
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/posts.png" height={20} width={20} className="" alt="" />
          <span className="">My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image
            src="/activity.png"
            height={20}
            width={20}
            className=""
            alt=""
          />
          <span className="">Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/market.png" height={20} width={20} className="" alt="" />
          <span className="">Market Place</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/events.png" height={20} width={20} className="" alt="" />
          <span className="">Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/albums.png" height={20} width={20} className="" alt="" />
          <span className="">Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/videos.png" height={20} width={20} className="" alt="" />
          <span className="">Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/news.png" height={20} width={20} className="" alt="" />
          <span className="">News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image
            src="/courses.png"
            height={20}
            width={20}
            className=""
            alt=""
          />
          <span className="">Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/lists.png" height={20} width={20} className="" alt="" />
          <span className="">Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image
            src="/settings.png"
            height={20}
            width={20}
            className=""
            alt=""
          />
          <span className="">Settings</span>
        </Link>
      </div>
      <div className="mt-4">
        <Ad size="sm" />
      </div>
      
    </div>
  );
};

export default LeftMenu;
