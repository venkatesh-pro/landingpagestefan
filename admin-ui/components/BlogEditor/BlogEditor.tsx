"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createBlog } from "@/actions/blog/blog";

import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/common";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import InputFileUpload from "../FileUpload/FileUpload";

// Dynamically import ReactQuill with syntax highlighting
const ReactQuill = dynamic(
  async () => {
    // Configure highlight.js on the window object
    // @ts-expect-error: hljs is not defined on the window object by default, but we are assigning it here for syntax highlighting.

    window.hljs = hljs;
    const { default: RQ } = await import("react-quill");
    return RQ;
  },
  { ssr: false }
);

const BlogEditor = () => {
  /*
  
  title string
  description string
  thumbnail string
  content string
  */
  const [content, setContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitData = async (data: FieldValues) => {
    try {
      const response = await createBlog(data, content, thumbnailUrl);
      console.log(response);

      if (response.error) {
        if (Array.isArray(response.message)) {
          response.message?.forEach((message: string) => {
            const field = message.split(" ")[0];
            if (field) {
              setError(field, { type: "manual", message: message });
            }
          });
        } else {
          toast.error(response.message);
        }
      } else {
        toast.success("Created");
        setContent("");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const modules = {
    syntax: true,
    toolbar: {
      container: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline", "strike"], // toggled buttons
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "code-block"], // add image button here
        [{ align: [] }],
        ["clean"],
      ],
      // handlers: {
      //   image: imageHandler, // Custom image handler
      // },
    },
  };

  return (
    <div className="flex w-full flex-col gap-3 items-center mt-10 min-h-[100vh]">
      <Box
        component={"form"}
        noValidate
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="w-[70vw]">
          <TextField
            id="outlined-basic"
            label="Please Enter the blog title"
            variant="outlined"
            className="w-full"
            {...register("title", { required: "Title is required" })}
            error={!!errors.title}
            // helperText={errors.title?.message}
            helperText={
              errors.title?.message ? String(errors.title.message) : undefined
            }
          />
        </div>
        <div className="w-[70vw] mt-6">
          <TextField
            id="outlined-basic"
            label="Please Enter the blog description"
            variant="outlined"
            {...register("description", {
              required: "Description is required",
            })}
            error={!!errors.description}
            helperText={
              errors.title?.message ? String(errors.title.message) : undefined
            }
            className="w-full"
          />
        </div>
        <div className="w-[70vw] flex mt-6">
          <InputFileUpload setThumbnailUrl={setThumbnailUrl} />
          {thumbnailUrl && (
            <div className="w-[60px] h-[60px] object-cover">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}/${thumbnailUrl}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="w-[70vw] mt-6">
          <ReactQuill
            theme="snow"
            modules={modules}
            value={content}
            onChange={setContent}
          />
        </div>

        <div>
          <Button type="submit">Create Blog</Button>
        </div>
      </Box>
      <div className="prose " dangerouslySetInnerHTML={{ __html: content }}>
        {/* ? */}
      </div>
    </div>
  );
};

export default BlogEditor;
