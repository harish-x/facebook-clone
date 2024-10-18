import Image from "next/image";
import React, { Suspense } from "react";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostIntraction from "./PostIntraction";
import Spinner from "../Spinner";
import Postinfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

type postType = PostType & { user: User } & { likes: [{ userId: string }] } & {
  _count: { comments: number };
};

const Post = ({ post }: { post: postType }) => {
  const {userId} = auth()
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full "
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
          
        </div>
      {  userId === post.userId && <Postinfo postId={post.id}/>}
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover rounded-md "
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/* intraction */}
      <Suspense fallback={<Spinner />}>

      <PostIntraction postId={post.id} likes={post.likes.map((l) => l.userId)} commentNumber={post._count.comments} />
      </Suspense>
      <Comments postId={post.id} />
    </div>
  );
};

export default Post;
