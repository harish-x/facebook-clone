"use client";
import prisma from "@/lib/client";
import Image from "next/image";
import React, { useState } from "react";
import { auth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import AddButton from "./AddButton";
import { addPost } from "@/lib/actions";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return "Loading...";
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();
  const [imageStatus, setImageStatus] = useState(false);
  // const testAction = async (formData: FormData) => {
  //   "use server";
  //   if (!userId) return;
  //   const desc = formData.get("desc") as string;
  //   try {
  //     const res = await prisma.post.create({
  //       data: {
  //         userId: userId,
  //         desc: desc,
  //       },
  //     });
  //     console.log(res);
  //   } catch (error) {}
  // };
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm flex-col">
      <div className="flex gap-4">
        {/* avatar */}
        <Image
          src={user?.imageUrl || "/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
        {/* post */}
        <div className="flex-1 ">
          {/* text input */}
          <form
            className="flex gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              addPost(new FormData(e.currentTarget), img?.secure_url || "");
              setImageStatus(true);
            }}
          >
            <textarea
              name="desc"
              id=""
              placeholder="What's on your mind?"
              className="bg-slate-50 rounded-lg p-2 flex-1"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <div>
              <Image
                src="https://img.icons8.com/?size=100&id=JijINYOWFFDS&format=png&color=000000"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5  cursor-pointer self-end"
              />
              <AddButton />
            </div>
          </form>
        </div>
      </div>
      <div>
        {imageStatus ? (
          <span className="flex items-center gap-2 text-green-500">
            Image uploaded successfully
            <Image
              src="https://img.icons8.com/?size=100&id=102561&format=png&color=000000"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5  cursor-pointer self-end"
            />{" "}
          </span>
          
        ):null}
      </div>
      {/* post options */}
      <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
        <CldUploadWidget
          uploadPreset="facebook-clone"
          onSuccess={(result, { widget }) => {
            setImg(result.info);
            widget.close();
            setImageStatus(true);
          }}
        >
          {({ open }) => {
            return (
              <>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src="/addimage.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5  cursor-pointer self-end"
                    onClick={() => open()}
                  />
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src="/addVideo.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5  cursor-pointer self-end"
                    onClick={() => open()}
                  />
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src="/addevent.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5  cursor-pointer self-end"
                    onClick={() => open()}
                  />
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src="/poll.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5  cursor-pointer self-end"
                    onClick={() => open()}
                  />
                </div>
              </>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
};

export default AddPost;
