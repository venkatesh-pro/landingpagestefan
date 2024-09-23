import { getUsers } from "@/actions/user/user";
import ListOfUsers from "@/components/User/ListOfUsers";
import React from "react";

const page = async () => {
  const users = await getUsers({ isFilter: false });
  console.log({ users });

  return (
    <div className="">
      <div className="mt-4">
        <ListOfUsers users={users} />
      </div>
    </div>
  );
};

export default page;
