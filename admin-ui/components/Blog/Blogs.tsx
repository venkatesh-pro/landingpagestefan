"use client";
import { convertIsoDate } from "@/utils/common/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { deleteBlog } from "@/actions/blog/blog";

const Blogs = ({ blogsData }) => {
  console.log("blogsData=>", blogsData);

  const handleBlogDelete = async (slug) => {
    try {
      const res = await deleteBlog(slug);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full rounded-lg border border-border px-3 py-4 backdrop-blur-[2px] md:p-6 mt-8">
      <div className="grid gap-8">
        <div className="grid gap-4 md:grid-cols-5 md:gap-8">
          <div className="md:col-span-1"></div>
          <div className="flex items-end justify-between gap-3 md:col-span-4">
            <div className="grid gap-4">
              <h1 className="font-bold text-4xl text-foreground">Blog</h1>
              <p className="text-muted-foreground">
                All the latest articles and news from Envoy.
              </p>
            </div>
          </div>
        </div>
        {blogsData?.map((blog, i: number) => {
          return (
            <article
              className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-6"
              key={i}
            >
              <div className="relative row-span-2">
                <div className="sticky top-2">
                  <time className="order-2 font-mono text-muted-foreground text-sm md:order-1 md:col-span-1">
                    {convertIsoDate(blog.createdAt)}{" "}
                  </time>
                </div>
              </div>
              <div className=" order-1 aspect-video w-full overflow-hidden rounded-md border border-border md:order-2 md:col-span-4">
                <Link href={`/blog/${blog.slug}`}>
                  <img
                    alt="Dynamic Breadcrumb in Next.js with Parallel Routes"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover p-3"
                    sizes="100vw"
                    src={blog.thumbnail}
                  />
                </Link>
              </div>
              <div className="order-3 grid grid-cols-1 gap-4 md:col-span-4 md:col-start-2">
                <h2 className="font-cal text-2xl text-foreground">
                  {blog.title}
                </h2>
                <div className="prose dark:prose-invert">
                  <p>{blog.description}</p>
                </div>
                <div className="flex">
                  <div>
                    <Link
                      className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full"
                      href={`/blog/${blog.slug}`}
                    >
                      <VisibilityIcon />
                    </Link>
                  </div>
                  <div className="ml-3">
                    <Link
                      className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full"
                      href={`/blog/edit/${blog.slug}`}
                    >
                      <EditIcon />
                    </Link>
                  </div>
                  <div className="ml-3">
                    <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full">
                      <DeleteIcon onClick={() => handleBlogDelete(blog.slug)} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
