"use client";
import { switchBlock, switchFollow } from "@/lib/actions";
import React, { useOptimistic } from "react";

type propsT = {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
};

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: propsT) => {
  const [userState, setUserState] = React.useState({
    following: isFollowing,
    blocked: isUserBlocked,
    FollowingRequestSent: isFollowingSent,
  });
  const [optimisticState, switchOptomisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            FollowingRequestSent:
              !state.following && !state.FollowingRequestSent ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );

  const follow = async () => {
    switchOptomisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        FollowingRequestSent:
          !prev.following && !prev.FollowingRequestSent ? true : false,
      }));
    } catch (error) {}
  };
  const block = async () => {
    switchOptomisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({ ...prev, blocked: !prev.blocked }));
    } catch (error) {}
  };
  return (
    <div>
      <form action={follow} className="">
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.FollowingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="w-full flex py-3 justify-end">
        <button type="submit">
          <span className="text-red-400 text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default UserInfoCardInteraction;
