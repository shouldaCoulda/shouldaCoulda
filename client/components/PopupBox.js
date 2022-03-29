import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

const PopupBox = (props) => {
  return (
    <Box className="popup">
      <Box className="box">
        <span className="close" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </Box>
    </Box>
  );
};

export default PopupBox;
