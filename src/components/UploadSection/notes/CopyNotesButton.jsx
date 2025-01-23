import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PropTypes from "prop-types";

const CopyNotesButton = ({ notesRef }) => {
  const [copyOption, setCopyOption] = useState("formatted");
  const [showCopyOptions, setShowCopyOptions] = useState(false);
  const [buttonText, setButtonText] = useState("Copy Notes");

  
  const handleCopyClick = async () => {
    if (notesRef.current) {
      try {
        const htmlContent = notesRef.current.innerHTML;
        const textContent = notesRef.current.innerText;

        const contentToCopy =
          copyOption === "formatted" ? htmlContent : `<pre>${textContent}</pre>`;

        const blob = new Blob([contentToCopy], { type: "text/html" });
        const clipboardItem = new ClipboardItem({
          "text/html": blob,
          "text/plain": new Blob([textContent], { type: "text/plain" }),
        });

        await navigator.clipboard.write([clipboardItem]);
        setButtonText("Copied!");
        setTimeout(() => setButtonText("Copy Notes"), 2000);
      } catch (err) {
        console.error("Failed to copy content:", err);
      }
    }

    setShowCopyOptions(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        bgcolor: "linear-gradient(135deg, #dbe6f6, #f7f7f7)",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header for Toggling Options */}
      <Box
        onClick={() => setShowCopyOptions((prev) => !prev)}
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
          Copy Notes...
        </Typography>
        <IconButton sx={{ color: "#fff" }}>
          {showCopyOptions ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      {/* Collapsible Options */}
      <Collapse in={showCopyOptions}>
        <Box sx={{ p: 2 }}>
          {/* Copy Format Selection */}
          <FormControl
            sx={{
              width: "100%",
              bgcolor: "#5f8d89",
              borderRadius: "10px",
            }}
          >
            <Select
              value={copyOption}
              onChange={(e) => setCopyOption(e.target.value)}
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
              <MenuItem value="formatted" sx={{ fontFamily: "Lora, serif" }}>
                Formatted
              </MenuItem>
              <MenuItem value="noFormat" sx={{ fontFamily: "Lora, serif" }}>
                No Format
              </MenuItem>
            </Select>
          </FormControl>

          {/* Copy Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleCopyClick}
              sx={{
                px: 3,
                py: 1,
                fontFamily: "Lora, serif",
                borderRadius: "20px",
                bgcolor: "#6B705C",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  bgcolor: "#A5A58D",
                  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
                },
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <FileCopyIcon sx={{ fontSize: 20 }} />
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};


CopyNotesButton.propTypes = {
  notesRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default CopyNotesButton;