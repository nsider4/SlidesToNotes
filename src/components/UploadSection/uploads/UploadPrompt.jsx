import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const UploadPrompt = ({ file }) => {
  if (file) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontFamily: "Lora, serif",
          color: "#4fc3f7",
        }}
      >
        Upload or drag a .pptx or .ppt file
      </Typography>
    </motion.div>
  );
};

UploadPrompt.propTypes = {
  file: PropTypes.any,
};

export default UploadPrompt;
