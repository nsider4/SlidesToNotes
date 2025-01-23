import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DocxDownloadButton from "./DocxDownloadButton";
import MetadataDownloadButton from "./MetadataDownloadButton";
import PropTypes from "prop-types";

const DownloadOptions = ({
  fileName,
  showDownloadOptions,
  setShowDownloadOptions,
  removeImages,
  imageFormat,
  handleImageFormatChange,
  notes,
}) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: "400px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      bgcolor: "linear-gradient(135deg, #dbe6f6, #f7f7f7)",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      mb: "70px",
    }}
  >
    {/* Toggle Header */}
    <Box
      onClick={() => setShowDownloadOptions((prev) => !prev)}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        p: 2,
        bgcolor: "#6B705C",
        color: "#fff",
      }}
    >
      <Typography sx={{ fontFamily: "Lora, serif", fontSize: "16px" }}>
        Download...
      </Typography>
      <IconButton sx={{ color: "#fff" }}>
        {showDownloadOptions ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
    </Box>

    {/* Collapsible Options */}
    <Collapse in={showDownloadOptions}>
      <Box sx={{ p: 2 }}>
        {/* Image Format Selection */}
        {!removeImages && (
          <>
            <Typography
              sx={{
                fontFamily: "Lora, serif",
                fontSize: "16px",
                color: "#fff",
                mb: 1,
                textAlign: "center",
              }}
            >
              Image Format
            </Typography>

            <FormControl
              sx={{
                width: "100%",
                bgcolor: "#5f8d89",
                borderRadius: "10px",
              }}
            >
              <Select
                value={imageFormat}
                onChange={handleImageFormatChange}
                sx={{
                  bgcolor: "#A5A58D",
                  color: "#fff",
                  fontFamily: "Lora, serif",
                  ".MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#5f8d89",
                  },
                  ".MuiSvgIcon-root": { color: "#fff" },
                  p: "10px",
                }}
              >
                <MenuItem value="png" sx={{ fontFamily: "Lora, serif" }}>
                  PNG (Heavier)
                </MenuItem>
                <MenuItem value="jpeg" sx={{ fontFamily: "Lora, serif" }}>
                  JPEG
                </MenuItem>
              </Select>
            </FormControl>
          </>
        )}

        {/* Download Buttons */}
        <Box sx={{ mt: 2 }}>
          <DocxDownloadButton
            notes={notes}
            fileName={fileName}
            imageFormat={imageFormat}
          />
        </Box>
        <Box sx={{ mt: 1 }}>
          <MetadataDownloadButton
            notes={notes}
            imageFormat={imageFormat}
            fileName={fileName}
          />
        </Box>
      </Box>
    </Collapse>
  </Box>
);


DownloadOptions.propTypes = {
  fileName: PropTypes.string.isRequired,
  showDownloadOptions: PropTypes.bool.isRequired,
  setShowDownloadOptions: PropTypes.func.isRequired,
  removeImages: PropTypes.bool.isRequired,
  imageFormat: PropTypes.string.isRequired,
  handleImageFormatChange: PropTypes.func.isRequired,
  notes: PropTypes.string.isRequired,
};

export default DownloadOptions;