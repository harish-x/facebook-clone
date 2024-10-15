import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28772394/pexels-photo-28772394/free-photo-of-snowy-mountain-peaks-in-obergurgl-tirol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          height={32}
          width={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="write a comment..."
            name=""
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            height={16}
            width={16}
            className=" cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        {/* connents */}
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src={"/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />

          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">User name</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              nobis sequi omnis nemo accusantium nam velit, molestias iste hic
              laudantium dolorum in repudiandae totam! Quod mollitia atque
              deleniti quo doloremque!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src={"/more.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
