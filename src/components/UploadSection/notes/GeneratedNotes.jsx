import React from "react";
import { Box, Card, CardContent, Typography, Alert } from "@mui/material";
import PropTypes from "prop-types";

const GeneratedNotes = ({ notes, error, notesRef }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        mx: "auto",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mx: "auto",
          "@media (min-width: 1200px)": {
            width: "100%",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
      >
        <Card
          sx={{
            bgcolor: "#f4f4f4",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "1200px",
            p: 2,
          }}
        >

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

          <CardContent>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: notes }}
              sx={{ textAlign: "left", color: 'black' }}
              ref={notesRef}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};


GeneratedNotes.propTypes = {
  notes: PropTypes.string.isRequired,
  error: PropTypes.string,
  notesRef: PropTypes.object,
};

GeneratedNotes.defaultProps = {
  error: null,
};

export default GeneratedNotes;