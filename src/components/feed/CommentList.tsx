"use client";
import { addComments } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";
export type CommentwithUser = Comment & { user: User } | any;
const CommentList = ({
  comments,
  postId,
}: {
  comments: CommentwithUser[];
  postId: number;
}) => {
  const { user } = useUser();
  const [commentState, setCommentState] = React.useState(comments);
  const [desc, setDesc] = useState("");
  const add = async () => {
    if (!desc || !user) return;
    const optimisticComment = {
      id: Math.random(),
      desc,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user.id,
      PostId: postId,
      user: {
        id: user.id,
        username: "Sending Please wait",
        avatar: user.imageUrl || "/noAvatar.png",
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

    addOptimisticComment(optimisticComment);
    try {
      const createdComment = await addComments(postId, desc);
      if (createdComment) {

        setCommentState((prev) => [createdComment, ...prev]);
      }
    } catch (error) {}
  };
  const [optimisticComment, addOptimisticComment] = useOptimistic(
    commentState,
    (state, value: CommentwithUser) => [value, ...state]
  );
  return (
    <>
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user?.imageUrl || "/noAvatar.png"}
            alt=""
            height={32}
            width={32}
            className="w-8 h-8 rounded-full"
          />
          <form
            action={add}
            className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full"
          >
            <input
              type="text"
              placeholder="write a comment..."
              name=""
              className="bg-transparent outline-none flex-1"
              onChange={(e) => setDesc(e.target.value)}
            />
            <Image
              src="/emoji.png"
              alt=""
              height={16}
              width={16}
              className=" cursor-pointer"
            />
          </form>
        </div>
      )}
      <div className="">
        {/* comments */}
        {optimisticComment.map((comment, i) => {
          return (
            <>
              <div className="flex gap-4 justify-between mt-6" key={i}>
                <Image
                  src={comment.user?.avatar || "/noAvatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full w-10 h-10"
                />

                <div className="flex flex-col gap-2 flex-1">
                  <span className="font-medium">
                    {comment.user.name && comment.user.surname
                      ? comment.user.name + " " + comment.user.surname
                      : comment.user.username}
                  </span>
                  <p>{comment.desc}</p>
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default CommentList;
