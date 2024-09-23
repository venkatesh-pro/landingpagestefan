import { getBlog } from "@/actions/blog/blog";
import BlogEditor from "@/components/BlogEditor/BlogEditor";
import React from "react";

interface PageParams {
  slug: string;
}
const page = async ({ params }: { params: PageParams }) => {
  const blogDataForEdit = await getBlog(params.slug);
  // const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      <BlogEditor
        slug={params.slug}
        blogDataForEdit={blogDataForEdit}
        isEdit={true}
      />
    </div>
  );
};

export default page;
