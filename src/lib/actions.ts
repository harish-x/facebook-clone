"use server";
import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) throw new Error("User is not authenticated!");
  try {
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
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) throw new Error("something went wrong");
  try {
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

export const acceptFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) throw new Error("something went wrong");
  try {
    const existingfollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingfollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingfollowRequest.id,
        },
      });
      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (error) {
    throw new Error("something went wrong");
  }
};

export const RejectFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) throw new Error("something went wrong");
  try {
    const existingfollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingfollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingfollowRequest.id,
        },
      });
    }
  } catch (error) {
    throw new Error("something went wrong");
  }
};

export const updateProfile = async (formData: FormData, cover: string) => {
  console.log(formData, cover);
  const { userId: currentUserId } = auth();
  const fields = Object.fromEntries(formData);

  const filteredFields = Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );
  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(50).optional(),
    description: z.string().max(200).optional(),
    surname: z.string().max(50).optional(),
    website: z.string().max(50).optional(),
    city: z.string().max(50).optional(),
    school: z.string().max(50).optional(),
    work: z.string().max(50).optional(),
  });

  const validateFields = Profile.safeParse({ cover, ...filteredFields });
  if (!validateFields.success) throw new Error("something went wrong");
  if (!currentUserId) throw new Error("something went wrong");
  try {
    await prisma.user.update({
      where: {
        id: currentUserId,
      },
      data: validateFields.data,
    });
  } catch (error) {
    console.log(error);

    throw new Error("something went wrong");
  }
};

export const switchLike = async (postId: number) => {
  const { userId } = auth();
  if (!userId) throw new Error("something went wrong");
  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        PostId: postId,
        userId,
      },
    });
    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          PostId: postId,
          userId,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addComments = async (postId: number, desc: string) => {
  const { userId } = auth();
  if (!userId) throw new Error("something went wrong");
  try {
    const createdComment = await prisma.comment.create({
      data: {
        PostId: postId,
        userId,
        desc,
      },
    });
    return createdComment;
  } catch (error) {
    console.log(error);
  }
};

export const addPost = async (formData: FormData, img: string) => {
  const desc = formData.get("desc") as string;
  if (!desc) throw new Error("something went wrong");
  const Desc = z.string().min(2).max(200);
  const validateDesc = Desc.safeParse(desc);
  if (!validateDesc.success) throw new Error("something went wrong");
  const { userId } = auth();
  if (!userId) throw new Error("something went wrong");
  try {
    await prisma.post.create({
      data: {
        desc: validateDesc.data,
        userId,
        img,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

export const addStory = async (img: string) => {
  const { userId } = auth();
  if (!userId) throw new Error("something went wrong");
  try {
    const existingStory = await prisma.story.findFirst({
      where: {
        userId,
      }
    })
    if(existingStory) {
      await prisma.story.delete({
        where: {
          id: existingStory.id
        }
      })
    }
   const createdstory = await prisma.story.create({
      data: {
        userId,
        img,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
     },
     include: {
       user: true
     }
    });
    return createdstory;
  } catch (error) {
    console.log(error);
  }
};


