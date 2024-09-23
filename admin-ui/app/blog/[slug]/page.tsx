import { getBlog } from "@/actions/blog/blog";
import Blog from "@/components/Blog/Blog";
import React from "react";

interface PageParams {
  slug: string;
}
const page = async ({ params }: { params: PageParams }) => {
  const blogData = await getBlog(params.slug);
  return <Blog blogData={blogData} />;
};

export default page;
