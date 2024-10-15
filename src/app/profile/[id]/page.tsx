import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image
                  src="https://images.pexels.com/photos/28398427/pexels-photo-28398427/free-photo-of-misty-mountain-peaks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
                <Image
                  src="https://images.pexels.com/photos/27958320/pexels-photo-27958320/free-photo-of-a-woman-in-a-green-dress-sitting-on-a-white-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                  width={128}
                  height={128}
                  className="w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">Batman</h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">123</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">1.2k</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">19k</span>
                  <span className="text-sm">Followings</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu userId="1" />
        </div>
      </div>
    </div>
  );
};

export default page;
