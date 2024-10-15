"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setISOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4px] cursor-pointer"
        onClick={() => setISOpen(!isOpen)}
      >
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen && "rotate-45"} origin-left ease-in-out duration-500`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen && "opacity-0"} ease-in-out duration-500`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen && "-rotate-45"} origin-left ease-in-out duration-500`} />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full bg-white h-[calc(100vh-96px)] p-4 flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={"/"}>Groups</Link>
          <Link href={"/"}>Stories</Link>
          <Link href={"/"}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;