import React from "react";
import { motion } from "framer-motion";
import { Button, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const FileInput = ({ file, isFileUploaded, handleFileChange, handleRemoveFile }) => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {!file && !isFileUploaded ? (
        <Button
          variant="contained"
          component="label"
          sx={{
            mt: 2,
            background: "linear-gradient(to bottom, #5f8d89 62%, #4e7b7d 38%)",
            color: "#3ac5b7",
            borderRadius: "10px",
            fontFamily: "Lora, serif",
            "&:hover": {
              background: "linear-gradient(to bottom, #4e7b7d 62%, #3d6862 38%)",
              transform: "scale(1.05)",
            },
            transition: "background-color 0.3s, transform 0.3s",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src="https://i.imgur.com/p4Kk3dY.png"
            alt="Select File"
            style={{ width: "100px", marginBottom: "10px" }}
          />

          <Box sx={{ textAlign: "left", width: "100%" }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Lora, serif",
                color: "#c4c4c4",
                marginTop: "10px",
                textTransform: "none",
              }}
            >
              <span style={{ marginRight: "5px" }}>✓</span> Max Size: 100MB
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Lora, serif",
                color: "#c4c4c4",
                marginTop: "5px",
                textTransform: "none",
              }}
            >
              <span style={{ marginRight: "5px" }}>✓</span> Allowed Formats: .ppt, .pptx
            </Typography>
          </Box>

          <input
            type="file"
            hidden
            accept=".ppt,.pptx"
            onChange={(e) => handleFileChange(e.target.files[0])}
          />
        </Button>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
          {file && (
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Lora, serif",
                color: "#c4c4c4",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              It might take longer than usual to do requests as this is not hosted for production
            </Typography>
          )}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography variant="subtitle1" sx={{ mr: 1, fontFamily: "Lora, serif" }}>
              Selected File: {file.name}
            </Typography>
            <IconButton onClick={handleRemoveFile} color="error">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </motion.div>
  );
};

FileInput.propTypes = {
  file: PropTypes.object,
  isFileUploaded: PropTypes.bool.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handleRemoveFile: PropTypes.func.isRequired,
};

export default FileInput;