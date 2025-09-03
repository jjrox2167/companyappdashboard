import React from "react";

import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="justify-items-center">
    <UserProfile />
    </div>
  )
};

export default UserProfilePage;
