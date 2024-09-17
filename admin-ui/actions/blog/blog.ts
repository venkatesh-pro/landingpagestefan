"use server";

import { FieldValues } from "react-hook-form";

export const createBlog = async (data: FieldValues, content: string) => {
  try {
    const res = await fetch("http://localhost:5000/blog", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        content,
        thumbnail: "sample.png",
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