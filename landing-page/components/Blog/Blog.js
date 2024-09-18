"use client";

import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // You can choose any style you prefer
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";

const Blog = ({ blogData }) => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    const processContent = () => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = blogData.content;

      // Extracting <pre> elements and converting them to React components
      const preElements = tempDiv.querySelectorAll("pre");
      const elements = Array.from(tempDiv.childNodes).map((node, index) => {
        console.log("node.innerHTML", node);

        if (node.tagName === "PRE") {
          const codeHtml = node.innerHTML;
          const codeText = node.innerText;
          return (
            <div key={index} className="relative mb-4">
              <pre className="">
                <code dangerouslySetInnerHTML={{ __html: codeHtml }} />
              </pre>
              <CopyButton code={codeHtml.replace(/<[^>]+>/g, "")} />
            </div>
          );
        }
        // Handle other nodes (like paragraphs, headings) if necessary
        return <div dangerouslySetInnerHTML={{ __html: node.outerHTML }}></div>;
      });

      setContent(elements);
    };

    processContent();
  }, [blogData.content]);

  const CopyButton = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000); // Change back after 3 seconds
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    };

    return (
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 rounded border-2 p-1 flex items-center"
      >
        {copied ? (
          <span>
            <ContentPasteGoIcon className="text-[16px] " />
          </span>
        ) : (
          <span>
            <ContentPasteIcon className="text-[16px] " />
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="mt-8 w-full rounded-lg border border-border px-3 py-4 backdrop-blur-[2px] md:p-6 sm:py-8 md:py-12">
      <article className="relative mx-auto flex max-w-prose flex-col gap-8">
        <div className="grid w-full gap-3">
          <h1 className="mb-5 font-bold text-3xl">{blogData.title}</h1>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
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
        <div className="prose prose-pre:bg-transparent prose-pre:text-code-text prose-pre:dark:bg-code-bg-dark prose-pre:dark:text-code-text-dark prose-pre:rounded-lg prose-pre:p-4 prose-pre:border-2 dark:prose-pre:border-0">
          {content}
        </div>
      </article>
    </div>
  );
};

export default Blog;
