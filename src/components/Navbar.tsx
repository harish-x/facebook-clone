"use client";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import Spinner from "./Spinner";

const Navbar = () => {
  const {user} = useUser()
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-500">
          facebook
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex items-center gap-2">
            <img
              src={"/home.png"}
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>
          <Link
            href={`/profile/${user?.username}`}
            className="flex items-center gap-2"
          >
            <img
              src={"/groups.png"}
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex items-center gap-2">
            <img
              src={"/stories.png"}
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-50 items-center rounded-xl ">
          <input
            type="text"
            name=""
            placeholder="Search"
            className="bg-transparent outline-none"
            id=""
          />
          <img src="/serach.png" alt="" className="w-4 h-4" />
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <Spinner />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer flex items-center justify-center gap-2">
              <Link href={`/profile/${user?.username}`}>
                <img
                  src="/people.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-5 h-5"
                />
              </Link>
            </div>
            <div className="cursor-pointer flex items-center justify-center gap-2">
              <Link href={"/"}>
                <img
                  src="/messages.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-5 h-5"
                />
              </Link>
            </div>
            <div className="cursor-pointer flex items-center justify-center gap-2">
              <Link href={"/"}>
                <img
                  src="https://img.icons8.com/?size=100&id=11642&format=png&color=3b82f6"
                  alt=""
                  width={16}
                  height={16}
                  className="w-5 h-5"
                />
              </Link>
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2">
              <div className="cursor-pointer">
                <Link href={"/sign-in"}>Sign In</Link>
              </div>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
