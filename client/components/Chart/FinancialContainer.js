import React, { useRef, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";
import { Box, Typography, Button, ButtonGroup } from "@mui/material";

const FinancialContainer = () => {
  const { usersSubscriptions } = useAuth();
  const {
    selectedApr,
    setSelectedApr,
    lines,
    selectedLines,
    setSelectedLines,
  } = useChart();
  const returnRef = useRef(1);

  function handleSubmit(e) {
    e.preventDefault();
    setSelectedApr(returnRef.current.value);
  }

  function handleChange(e, index) {
    const data = [];
    for (let i = 0; i < selectedLines.length; i++) {
      if (i === index) {
        data[i] = !selectedLines[i];
      } else {
        data[i] = selectedLines[i];
      }
    }
    setSelectedLines(data);
  }
  useEffect(() => {
    for (const line of lines) {
      setSelectedLines([...selectedLines, true]);
    }
  }, [usersSubscriptions]);

  return (
    <>
      <Box>
        <Typography gutterBottom variant="h5" component="div">
          Toggle Data
        </Typography>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          {lines.map((line, index) => {
            let color = "";
            let fontColor = "";
            if (selectedLines[index]) {
              color = line.color;
              fontColor = "white";
            }
            return (
              <Button
                key={index}
                onClick={(e) => handleChange(e, index)}
                sx={{ backgroundColor: color, color: fontColor }}
              >
                {line.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
    </>
  );
};

export default FinancialContainer;
