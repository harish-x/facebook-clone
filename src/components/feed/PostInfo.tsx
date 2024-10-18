"use client";
import { deletepost } from "@/lib/actions";
import Image from "next/image";
import React, { useState } from "react";

const PostInfo = ({ postId }: { postId: number }) => {
  const [open, setOpen] = useState(false);
  const deletepostWithId = deletepost.bind(null, postId);
  return (
    <div>
      <Image
        src="/more.png"
        alt=""
        width={40}
        height={40}
        className="w-5 h-5 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
     
      />
      {open && (
        <div className="absolute right-0 top-4 bng-white w-32 p-4 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-post</span>
          <form action={deletepostWithId}>
            <button className="btn text-red-500">delete</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
