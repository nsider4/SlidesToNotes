import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";

const RemoveImagesCheckbox = ({ removeImages, handleRemoveImagesChange }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={removeImages}
        onChange={handleRemoveImagesChange}
        inputProps={{ "aria-label": "Remove Images Checkbox" }}
      />
    }
    label={
      <Typography sx={{ fontFamily: "Lora, serif" }}>
        Remove Images
      </Typography>
    }
    sx={{ marginTop: 3, marginBottom: "70px" }}
  />
);


RemoveImagesCheckbox.propTypes = {
  removeImages: PropTypes.bool.isRequired,
  handleRemoveImagesChange: PropTypes.func.isRequired,
};

export default RemoveImagesCheckbox;