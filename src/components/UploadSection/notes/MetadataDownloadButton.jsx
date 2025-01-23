import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";

const MetadataDownloadButton = ({ notes, imageFormat, fileName }) => {


  const handleDownloadMetadata = async () => {
    try {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(notes, "text/html");

      const extractedTextLines = [];
      const extractedImageUrls = [];

      htmlDocument.body.childNodes.forEach((node) => {
        if (
          (node.nodeName === "H1" ||
            node.nodeName === "H2" ||
            node.nodeName === "H3" ||
            node.nodeName === "H4" ||
            node.nodeName === "H5" ||
            node.nodeName === "H6") &&
          node.textContent.trim() !== "" //Ensures the header has text content
        ) {
          const titleLevel = parseInt(node.nodeName.substring(1), 10); //Get header level (H1 -> 1)
          const prefix = "★".repeat(titleLevel); //Adds stars based on header level
          extractedTextLines.push(
            "",
            `${prefix} ${node.textContent.trim()} ${prefix}`,
            ""
          );
        } else if (node.nodeName === "P") {
          extractedTextLines.push(`    ${node.textContent.trim()}`);
        } else if (node.nodeName === "TABLE") {
          const tableLines = [];
          node.querySelectorAll("tr").forEach((row) => {
            const cells = Array.from(row.querySelectorAll("td")).map((cell) =>
              cell.textContent.trim()
            );
            tableLines.push(`| ${cells.join(" | ")} |`);
          });
          extractedTextLines.push(
            "",
            "┌────────────────────── Table Start ──────────────────────┐",
            ...tableLines,
            "└─────────────────────── Table End ───────────────────────┘",
            ""
          );
        } else if (node.nodeName === "IMG") {
          const src = node.getAttribute("src");
          if (src) extractedImageUrls.push(src);
        }
      });

      //Prepare data to send to the backend
      const data = {
        notes: extractedTextLines.join("\n"),
        imageFormat,
        fileName,
        imageUrls: extractedImageUrls,
      };

      const response = await axios.post("/api/metadata/download", data, {
        responseType: "blob",
      });

      //Parse filename from response headers
      const contentDisposition = response.headers["content-disposition"];
      const matches = contentDisposition && contentDisposition.match(/filename="(.+)"/);
      const resolvedFilename = matches?.[1] || "metadata.zip";

      //Create a Blob for downloading the file
      const blob = new Blob([response.data], { type: "application/zip" });
      const url = URL.createObjectURL(blob);

      //Create and trigger a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = resolvedFilename;
      downloadLink.click();

      //Revoke the URL to free memory
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading metadata:", error.message);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownloadMetadata}
      sx={{
        mt: 2,
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
      Download Metadata
    </Button>
  );
};

MetadataDownloadButton.propTypes = {
  notes: PropTypes.string.isRequired,
  imageFormat: PropTypes.string,
  fileName: PropTypes.string,
};

MetadataDownloadButton.defaultProps = {
  imageFormat: "png",
  fileName: "metadata",
};

export default MetadataDownloadButton;