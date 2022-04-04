import React, { useState } from "react";
import PopupBox from "./PopupBox";
import { Link } from "react-router-dom";
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
} from "@mui/material";

function PopupButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Button
        type="button"
        value="ADD"
        // className="moreSubsButton hover"
        onClick={togglePopup}
        sx={{
          backgroundColor: "#7FD3F4",
          fontSize: 18,
          color: "#EC008C",
        }}
      >
        +
      </Button>
      {isOpen && (
        <PopupBox
          content={
            <>
              <Typography type="b">I Want To Add To</Typography>

              <Box>
                <Link to="/expense">
                  <Button>Other Expenses</Button>
                </Link>
                <Link to="/selections">
                  <Button>Subscriptions</Button>
                </Link>
              </Box>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </Box>
  );
}

export default PopupButton;
