import { getBlog } from "@/actions/blog/blog";
import Blog from "@/components/Blog/Blog";
import React from "react";

const page = async ({ params }) => {
  const blogData = await getBlog(params.slug);
  return <Blog blogData={blogData} />;
};

export default page;
