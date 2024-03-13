import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ChangeEvent, useState } from "react";
import { Typography } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PhotoIcon from "@mui/icons-material/Photo";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box } from "@mui/system";

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

export default function InputFileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "application/pdf") {
        console.log("file okie");
      } else {
        // Xử lý thông báo hoặc hành động khi loại file không được chấp nhận
        alert("file không hợp lệ !");
      }
    }
  };

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "image/jpeg":
      case "image/png":
        return <PhotoIcon sx={{ color: "#e36334", marginLeft: "5px" }} />;
      case "application/pdf":
        return <PictureAsPdfIcon sx={{ color: "#e36334", marginLeft: "5px" }} />;
      default:
        return <AttachFileIcon sx={{ color: "#e36334", marginLeft: "5px" }} />;
    }
  };

  return (
    <>
      <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
        Upload file (giấy khám)
        <VisuallyHiddenInput type="file" accept="image/jpeg, image/png, application/pdf" onChange={handleFileChange} />
      </Button>

      {file && (
        <Box>
          <Typography variant="body1" style={{ fontStyle: "italic" }}>
            <a href={URL.createObjectURL(file)} download={file.name} style={{ fontSize: "1.2rem" }}>
              {file.name}
              {getFileIcon(file.type)}
            </a>
          </Typography>
        </Box>
      )}
    </>
  );
}
