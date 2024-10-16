"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();
  try {
    if (!currentUserId || userId) throw new Error("something went wrong");
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });
      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {}
};

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();
  try {
    if (!currentUserId) throw new Error("something went wrong");
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockedId: userId,
        blockerId: currentUserId,
      },
    });
    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockedId: userId,
          blockerId: currentUserId,
        },
      });
    }
  } catch (error) {
    throw new Error("something went wrong");
  }
};
