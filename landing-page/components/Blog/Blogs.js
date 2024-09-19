"use client";
import { convertIsoDate } from "@/utils/common/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = ({ blogsData }) => {
  console.log(blogsData);

  return (
    <div className="w-full rounded-lg border border-border px-3 py-4 backdrop-blur-[2px] md:p-6 mt-8">
      <div className="grid gap-8">
        <div class="grid gap-4 md:grid-cols-5 md:gap-8">
          <div class="md:col-span-1"></div>
          <div class="flex items-end justify-between gap-3 md:col-span-4">
            <div class="grid gap-4">
              <h1 class="font-bold text-4xl text-foreground">Blog</h1>
              <p class="text-muted-foreground">
                All the latest articles and news from Envoy.
              </p>
            </div>
          </div>
        </div>
        {blogsData?.map((blog) => {
          return (
            <article class="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-6">
              <div class="relative row-span-2">
                <div class="sticky top-2">
                  <time class="order-2 font-mono text-muted-foreground text-sm md:order-1 md:col-span-1">
                    {convertIsoDate(blog.createdAt)}{" "}
                  </time>
                </div>
              </div>
              <div class=" order-1 aspect-video w-full overflow-hidden rounded-md border border-border md:order-2 md:col-span-4">
                <Link href={`/blog/${blog.slug}`}>
                  <img
                    alt="Dynamic Breadcrumb in Next.js with Parallel Routes"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover p-3"
                    sizes="100vw"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${blog.thumbnail}`}
                  />
                </Link>
              </div>
              <div class="order-3 grid grid-cols-1 gap-4 md:col-span-4 md:col-start-2">
                <h2 class="font-cal text-2xl text-foreground">{blog.title}</h2>
                <div class="prose dark:prose-invert">
                  <p>{blog.description}</p>
                </div>
                <div>
                  <Link
                    class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full"
                    href={`/blog/${blog.slug}`}
                  >
                    Read more
                  </Link>
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
