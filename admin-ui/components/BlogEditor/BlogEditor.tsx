"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";
import { createBlog } from "@/actions/blog/blog";

const BlogEditor = () => {
  /*
  
  title string
  description string
  thumbnail string
  content string
  */
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitData = async (data: FieldValues) => {
    try {
      const response = await createBlog(data, content);
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
            helperText={errors.title?.message}
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
            helperText={errors.description?.message}
            className="w-full"
          />
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
      {/* <div className="w-[70vw]">
        <TextField
          id="outlined-basic"
          label="Please Enter the blog description"
          variant="outlined"
          className="w-full"
        />
      </div> */}
    </div>
  );
};

export default BlogEditor;

/*
const onSubmit = async (data: FieldValues) => {
    try {
      console.log({ data });

      // API request simulation
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Map errors returned from API
        errorData.message.forEach((message: string) => {
          const field = message.split(" ")[0];

          if (field) {
            setError(field, { type: "manual", message: message });
          }
        });
      } else {
        // Handle successful response
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
*/