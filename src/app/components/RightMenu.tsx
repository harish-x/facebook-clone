import React from "react";
import FriendRequests from "./FriendRequests";
import BirthDays from "./BirthDays";
import Ad from "./Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6 mt-5">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <BirthDays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
