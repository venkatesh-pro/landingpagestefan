import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-[90vh] items-center justify-center flex-col">
      <Link href={"/blog"}>Go to Blog</Link>
      <Link href={"/user/list"}>Go to the List of Registered User</Link>
    </div>
  );
};

export default page;
