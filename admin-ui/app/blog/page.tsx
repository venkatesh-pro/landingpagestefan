import { getBlogs } from "@/actions/blog/blog";
import Blogs from "@/components/Blog/Blogs";
import React from "react";

const page = async () => {
  const blogsData = await getBlogs();

  return (
    <div>
      <Blogs blogsData={blogsData} />
    </div>
  );
};

export default page;
