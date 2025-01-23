import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";

const DocxDownloadButton = ({ notes, fileName, imageFormat }) => {

  const handleDownloadDocx = async () => {
    try {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(notes, "text/html");

      //Parse the HTML content into structured nodes
      const parsedNodes = Array.from(htmlDocument.body.childNodes)
        .map((node) => {
          if (node.nodeName === "H2") {
            return { type: "H2", text: node.textContent.trim() };
          }
          if (node.nodeName === "P") {
            return { type: "P", text: node.textContent.trim() };
          }
          if (node.nodeName === "IMG") {
            return { type: "IMG", src: node.getAttribute("src") };
          }
          if (node.nodeName === "TABLE") {
            const rows = Array.from(node.getElementsByTagName("tr")).map((row) => {
              const cells = Array.from(row.getElementsByTagName("td")).map(cell =>
                cell.textContent.trim()
              );
          
              return cells.length > 0 ? cells : null; 
            }).filter(row => row !== null);
          
            return { type: "TABLE", tableRows: rows };
          }
          return null;
        })
        .filter(Boolean);

      const response = await axios.post(
        "/api/docx/generate",
        {
          fileName: fileName || "generated_notes",
          imageFormat: imageFormat || "png",
          nodes: parsedNodes,
        },
        { responseType: "blob" }
      );

      //Create a Blob for the response data and initiate the download
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const url = URL.createObjectURL(blob);

      //Create and trigger a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = `${fileName || "generated_notes"}.docx`;
      downloadLink.click();

      //Revoke the URL to release memory
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating DOCX:", error.message);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownloadDocx}
      sx={{
        mt: 4,
        bgcolor: "#6B705C",
        color: "#fff",
        borderRadius: "20px",
        fontFamily: "Lora, serif",
        "&:hover": {
          bgcolor: "#A5A58D",
          transform: "scale(1.05)",
        },
        transition: "background-color 0.3s, transform 0.3s",
        letterSpacing: "1.5px",
      }}
      startIcon={<DownloadIcon />}
    >
      Download as .docx
    </Button>
  );
};


DocxDownloadButton.propTypes = {
  notes: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  imageFormat: PropTypes.string,
};


DocxDownloadButton.defaultProps = {
  fileName: "generated_notes",
  imageFormat: "png",
};

export default DocxDownloadButton;