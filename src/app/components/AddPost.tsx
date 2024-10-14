import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm ">
      {/* avatar */}
      <Image
        src="https://images.pexels.com/photos/28874283/pexels-photo-28874283/free-photo-of-minimal-workspace-with-laptop-and-coffee-mug.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* post */}
      <div className="flex-1 ">
        {/* text input */}
        <div className=" flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind?"
            className="bg-slate-50 rounded-lg p-2 flex-1"
          ></textarea>
          <Image
            src="https://img.icons8.com/?size=100&id=JijINYOWFFDS&format=png&color=000000"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5  cursor-pointer self-end"
          />
        </div>
      </div>

      {/* post options */}
      <div className="flex items-center gap-4 mt-4 text-gray-400">
        <div className="">
          <Image
            src="/addimage.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5  cursor-pointer self-end"
          />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
