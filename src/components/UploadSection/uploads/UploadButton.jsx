import React from "react";
import { Button, CircularProgress, Box } from "@mui/material";
import PropTypes from "prop-types";
import UploadFileIcon from "@mui/icons-material/UploadFile"; // Import the UploadFileIcon

const UploadButton = ({ file, isFileUploaded, loading, handleSubmit }) => {
  if (!file || isFileUploaded) return null;

  return (
    <Button
      variant="contained"
      onClick={handleSubmit}
      disabled={loading}
      sx={{
        bgcolor: "#5f8d89",
        color: "#fff",
        borderRadius: "20px",
        fontFamily: "Lora, serif",
        "&:hover": {
          bgcolor: "#4e7b7d",
          transform: "scale(1.05)",
        },
        transition: "background-color 0.3s, transform 0.3s",
        letterSpacing: "1.5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
      }}
    >
      {loading ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <UploadFileIcon sx={{ marginRight: "8px" }} />
          Upload
        </Box>
      )}
    </Button>
  );
};

UploadButton.propTypes = {
  file: PropTypes.any,
  isFileUploaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UploadButton;