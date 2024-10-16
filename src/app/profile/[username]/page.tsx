import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightmenu/RightMenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type paramsT = {
  params: {
    username: string;
  };
};
const page = async ({ params }: paramsT) => {
  const username = params.username;
  const user = await prisma.user.findFirst({
    where: { username },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          post: true,
        },
      },
    },
  });
  if (!user) return notFound();
  const { userId: currentUserId } = auth();
  let isBlocked;
  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: { blockedId: user.id, blockerId: currentUserId },
    });
    if (res) isBlocked = true;
    else isBlocked = false;
  }
  if (isBlocked) return notFound();
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
                  src={user.cover || "noCover.png"}
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
                <Image
                  src={user.avatar || "noAvatar.png"}
                  alt=""
                  width={128}
                  height={128}
                  className="w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">
                {user.name && user.surname
                  ? user.name + " " + user.surname
                  : user.username}
              </h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.post}</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.followers}</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.followings}</span>
                  <span className="text-sm">Followings</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu user={ user} />
        </div>
      </div>
    </div>
  );
};

export default page;
