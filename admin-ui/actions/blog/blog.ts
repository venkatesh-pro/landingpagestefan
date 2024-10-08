"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createBlog = async (
  data: FieldValues,
  content: string,
  thumbnail: string
) => {
  try {
    const res = await fetch(`${process.env.API_URL}/blog`, {
      method: "POST",
      body: JSON.stringify({
        ...data,
        content,
        thumbnail,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      const json = await res.json();
      console.log(json);

      // Ensure json is defined and has the expected properties
      return {
        statusCode: json.statusCode || res.status,
        message: json.message || "An unexpected error occurred",
        error: json.error || "Unknown error",
      };
    }

    // Parse the JSON response
    const json = await res.json();
    console.log("json=>>>>", json);

    // Return the successful response
    return json;
  } catch (error) {
    // Handle network errors or other unexpected errors
    console.error("Request failed", error);
    return {
      statusCode: 500,
      message: "A network error occurred",
      error: "Network Error",
    };
  }
};

export const updateBlog = async (
  slug: string | undefined,
  data: FieldValues,
  content: string,
  thumbnail: string
) => {
  try {
    const res = await fetch(`${process.env.API_URL}/blog/${slug}`, {
      method: "PUT",
      body: JSON.stringify({
        ...data,
        content,
        thumbnail,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      const json = await res.json();
      console.log(json);

      // Ensure json is defined and has the expected properties
      return {
        statusCode: json.statusCode || res.status,
        message: json.message || "An unexpected error occurred",
        error: json.error || "Unknown error",
      };
    }

    // Parse the JSON response
    const json = await res.json();
    console.log("json=>>>>", json);

    // Return the successful response
    return json;
  } catch (error) {
    // Handle network errors or other unexpected errors
    console.error("Request failed", error);
    return {
      statusCode: 500,
      message: "A network error occurred",
      error: "Network Error",
    };
  }
};

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/blog`, {
      method: "GET",
      cache: "no-cache",
      next: { tags: ["blogs"] },
    });

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      const json = await res.json();
      console.log(json);

      // Ensure json is defined and has the expected properties
      return {
        statusCode: json.statusCode || res.status,
        message: json.message || "An unexpected error occurred",
        error: json.error || "Unknown error",
      };
    }

    // Parse the JSON response
    const json = await res.json();
    console.log("json=>>>>", json);

    // Return the successful response
    return json;
  } catch (error) {
    // Handle network errors or other unexpected errors
    console.error("Request failed", error);
    return {
      statusCode: 500,
      message: "A network error occurred",
      error: "Network Error",
    };
  }
};

export const getBlog = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/blog/${slug}`, {
      method: "GET",
      cache: "no-cache",
    });

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      const json = await res.json();
      console.log(json);

      // Ensure json is defined and has the expected properties
      return {
        statusCode: json.statusCode || res.status,
        message: json.message || "An unexpected error occurred",
        error: json.error || "Unknown error",
      };
    }

    // Parse the JSON response
    const json = await res.json();
    console.log("json=>>>>", json);

    // Return the successful response
    return json;
  } catch (error) {
    // Handle network errors or other unexpected errors
    console.error("Request failed", error);
    return {
      statusCode: 500,
      message: "A network error occurred",
      error: "Network Error",
    };
  }
};

export const deleteBlog = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/blog/${slug}`, {
      method: "DELETE",
      cache: "no-cache",
    });

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      const json = await res.json();
      console.log(json);

      // Ensure json is defined and has the expected properties
      return {
        statusCode: json.statusCode || res.status,
        message: json.message || "An unexpected error occurred",
        error: json.error || "Unknown error",
      };
    }

    // Parse the JSON response
    const json = await res.json();
    console.log("json=>>>>", json);
    revalidateTag("blogs");
    // Return the successful response
    return json;
  } catch (error) {
    // Handle network errors or other unexpected errors
    console.error("Request failed", error);
    return {
      statusCode: 500,
      message: "A network error occurred",
      error: "Network Error",
    };
  }
};

export const uploadBlogThumbnail = async (file: FormData) => {
  try {
    const res = await fetch(`${process.env.API_URL}/blog/uploadThumbnail`, {
      method: "POST",
      body: file,
    });
    console.log({ res });

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      const json = await res.json();
      console.log(json);

      // Ensure json is defined and has the expected properties
      return {
        statusCode: json.statusCode || res.status,
        message: json.message || "An unexpected error occurred",
        error: json.error || "Unknown error",
      };
    }

    // Parse the JSON response
    const json = await res.json();
    console.log("json=>>>>", json);

    // Return the successful response
    return json;
  } catch (error) {
    // Handle network errors or other unexpected errors
    console.error("Request failed", error);
    return {
      statusCode: 500,
      message: "A network error occurred",
      error: "Network Error",
    };
  }
};
