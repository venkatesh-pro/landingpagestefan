"use server";

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/blog`, {
      method: "GET",
      cache: "no-cache"
    });

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
    const json = await res.json();
    console.log("json=>>>>", json);

    return json;
  } catch (error) {
    console.log(error);
  }
};
export const getBlog = async (slug) => {
  try {
    const res = await fetch(`${process.env.API_URL}/blog/${slug}`, {
      method: "GET",
      cache: "no-cache",
    });

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
    const json = await res.json();
    console.log("json=>>>>", json);

    return json;
  } catch (error) {
    console.log(error);
  }
};
