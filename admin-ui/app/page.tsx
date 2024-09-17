import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <Link href={"/blog"}>Go to Blog</Link>
    </div>
  );
};

export default page;
