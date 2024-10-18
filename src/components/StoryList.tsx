"use client";

import { addStory } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type storywithUser = Story & { user: User };

const StoryList = ({ stories,userId }: { stories: storywithUser[],userId:string }) => {
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState<any>(null);
  const { user, isLoaded } = useUser();
  const [optimisticStory, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value: storywithUser) => [...state, value]
  );
  if (!user && isLoaded) return "sending...";
  if (!user && isLoaded) return null;
  const add = async () => {
    if (!img?.secure_url) return;
    const optimisticComment = {
      id: Math.random(),
      img: img?.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        username: "Sending Please wait",
        avatar: user?.imageUrl || "/noAvatar.png",
        name: "",
        city: "",
        cover: "",
        work: "",
        school: "",
        surname: "",
        description: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    };
    addOptimisticStory(optimisticComment as any);
    try {
       const createdStory =  await addStory(img?.secure_url);
        setStoryList((prev) => [createdStory!, ...prev]);
        setImg(null);
    } catch (error) {}
  };
  return (
    <div>
      <CldUploadWidget
        uploadPreset="facebook-clone"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="flex flex-col gap-2 items-center cursor-pointer relative">
              <div className="relative">
                <Image
                  src={img?.secure_url || user?.imageUrl || "/noAvatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className="w-20 h-20 rounded-full ring-2 blur-[1.5px] bg-blend-darken"
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-full" />
              </div>

              {img ? (
                <form action="">
                  <button className="bg-blue-500 text-white text-xs  p-1 rounded-md">
                    send
                  </button>
                </form>
              ) : (
                <span className="font-thin">Add a Story</span>
              )}

              <Image
                src="https://img.icons8.com/?size=100&id=63650&format=png&color=000000"
                alt=""
                width={40}
                height={40}
                className="w-5 h-5 rounded-full absolute top-1/4"
                onClick={() => open()}
              />
            </div>
          );
        }}
      </CldUploadWidget>
      {optimisticStory.map((story) => {
        return (
          <div
            className="flex flex-col gap-2 items-center cursor-pointer"
            key={story.id}
          >
            <Image
              src={story.user.avatar || "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-20 h-20 rounded-full ring-2"
            />
            <span className="font-thin">
              {story.user.name || story.user.username}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StoryList;
