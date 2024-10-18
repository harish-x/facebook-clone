import prisma from "@/lib/client";
import Image from "next/image";
import React from "react";
import CommentList from "./CommentList";

const Comments = async ({ postId }: { postId: number }) => {
  const comments = await prisma.comment.findMany({
    where: {
      PostId: postId,
    },
    include: {
      user: true,
    },
  })
  return (
    <div className="">
     <CommentList comments={comments} postId={postId}/>
    </div>
  );
};

export default Comments;
