import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/17365983/pexels-photo-17365983/free-photo-of-balloon-over-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full "
          />
          <span className="font-medium">Batman</span>
          <Image
            src="/more.png"
            alt=""
            width={40}
            height={40}
            className="w-5 h-5 rounded-full "
          />
        </div>
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/17365983/pexels-photo-17365983/free-photo-of-balloon-over-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md "
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, id porro
          totam ab quidem reiciendis minus eum ullam laborum dicta, rem omnis
          rerum temporibus. Dolorum laboriosam accusamus quasi iusto delectus?
        </p>
      </div>
      {/* intraction */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>{" "}
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>{" "}
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
          </div>
          <Comments/>
    </div>
  );
};

export default Post;
