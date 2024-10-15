import Image from "next/image";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import Stories from "./components/Stories";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <>
      <div className="flex gap-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="home"/>
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6 mt-5">
            <Stories />
            <AddPost />
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu />
        </div>
      </div>
    </>
  );
}
