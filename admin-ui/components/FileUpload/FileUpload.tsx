import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { uploadBlogThumbnail } from "@/actions/blog/blog";
import toast from "react-hot-toast";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload({ setThumbnailUrl }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleFileUpload = async (event) => {
    try {
      setIsLoading(true);
      console.log(event.target.files);
      const thumbnail = new FormData();

      // Add file in the FormData
      thumbnail.append("thumbnail", event.target.files[0]);

      const res = await uploadBlogThumbnail(thumbnail);

      console.log(res);

      if (res.error) {
        throw new Error(res.message || "Something went wrong");
      }
      setThumbnailUrl(res.thumbnail);
      setIsLoading(false);

      toast.success("Uploaded");
    } catch (error) {
      console.log(error);

      toast.error(error.message);
      setIsLoading(false);
    }
  };
  return (
    <Button
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      className="w-full p-3 border-black text-black"
      startIcon={!isLoading && <CloudUploadIcon />}
    >
      {isLoading ? (
        "...Uploading"
      ) : (
        <>
          Upload Thumbnail
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => handleFileUpload(event)}
            multiple
          />
        </>
      )}
    </Button>
  );
}
