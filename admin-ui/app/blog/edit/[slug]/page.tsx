import { getBlog } from "@/actions/blog/blog";
import BlogEditor from "@/components/BlogEditor/BlogEditor";
import React, { useState } from "react";

const page = async ({ params }) => {
  const blogDataForEdit = await getBlog(params.slug);
  // const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      <BlogEditor blogDataForEdit={blogDataForEdit} isEdit={true} />
    </div>
  );
};

export default page;
