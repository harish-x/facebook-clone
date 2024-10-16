
import React, { Suspense } from "react";
import FriendRequests from "./FriendRequests";
import BirthDays from "./BirthDays";
import Ad from "../Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";
import Spinner from "../Spinner";
// const UserInfoCard = React.lazy(() => import("./UserInfoCard"));

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6 mt-5">
      {user ? (
        <>
          {/* <Suspense fallback={<Spinner/>}> */}
            <UserInfoCard user={user} />
          {/* </Suspense> */}
          {/* <Suspense fallback={<Spinner/>}> */}
            <UserMediaCard user={user} />
           {/* </Suspense> */}
        </>
      ) : null}
      <FriendRequests />
      <BirthDays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
