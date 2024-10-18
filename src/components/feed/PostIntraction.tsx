"use client";
import React, { useOptimistic } from "react";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { switchLike } from "@/lib/actions";

const PostIntraction = ({
  postId,
  likes,
  commentNumber,
}: {
  postId: number;
  likes: string[];
  commentNumber: number;
}) => {
  const { userId, isLoaded } = useAuth();
  const [likeState, setLikeState] = React.useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(String(userId)) : false,
  });
  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );
  const likeAction = async () => {
    switchOptimisticLike("");
    try {
      switchLike(postId);
      setLikeState((state) => {
        return {
          likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
          isLiked: !state.isLiked,
        };
      });
    } catch (error) {}
  };
  return (
    <div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <form action={likeAction}>
              <button type="submit">
                <Image
                  src={optimisticLike.likeCount ? "/liked.png" : "/like.png"}
                  alt=""
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </button>
            </form>

            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              {optimisticLike.likeCount} <span className="hidden md:inline">Likes</span>{" "}
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
              { commentNumber} <span className="hidden md:inline">Comments</span>{" "}
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
              <span className="hidden md:inline">Share</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostIntraction;
