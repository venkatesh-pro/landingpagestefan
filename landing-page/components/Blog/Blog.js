import React from "react";

const Blog = ({ blogData }) => {
  return (
    <div class="mt-8 w-full rounded-lg border border-border px-3 py-4 backdrop-blur-[2px] md:p-6 sm:py-8 md:py-12">
      <article class="relative mx-auto flex max-w-prose flex-col gap-8">
        <div class="grid w-full gap-3">
          <h1 class="mb-5 font-bold text-3xl">{blogData.title}</h1>
          <div class="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
            <img
              alt="Dynamic Breadcrumb in Next.js with Parallel Routes"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="100vw"
              src="https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/virtus%201_0.jpg"
            />
          </div>
        </div>
        <div
          className="prose prose-slate dark:prose-invert prose-pre:my-0 prose-img:rounded-lg prose-pre:rounded-lg prose-img:border prose-pre:border prose-img:border-border prose-pre:border-border prose-headings:font-cal prose-headings:font-normal"
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        >
          {/* ? */}
        </div>
      </article>
    </div>
  );
};

export default Blog;
