import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/28398427/pexels-photo-28398427/free-photo-of-misty-mountain-peaks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className="rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/27958320/pexels-photo-27958320/free-photo-of-a-woman-in-a-green-dress-sitting-on-a-white-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Batman</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/27958320/pexels-photo-27958320/free-photo-of-a-woman-in-a-green-dress-sitting-on-a-white-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
            <Image
              src="https://images.pexels.com/photos/27958320/pexels-photo-27958320/free-photo-of-a-woman-in-a-green-dress-sitting-on-a-white-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
            <Image
              src="https://images.pexels.com/photos/27958320/pexels-photo-27958320/free-photo-of-a-woman-in-a-green-dress-sitting-on-a-white-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
                  </div>
                  <span className="text-xs text-gray-500">500 followers</span>
              </div>
              <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
