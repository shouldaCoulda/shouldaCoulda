import React from "react";
import { useChart } from "../../contexts/ChartContext";
import { Box, Typography, Container } from "@mui/material";

const Legend = () => {
  const { lines, selectedLines } = useChart();

  let displayedLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (selectedLines[i] === true) {
      displayedLines.push(lines[i]);
    }
  }
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
      {displayedLines.map((elem, key) => {
        return (
          <Typography
            key={key}
            gutterBottom
            variant="p"
            component="div"
            sx={{ color: elem.color, padding: 2 }}
          >
            {elem.name} : {elem.color}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Legend;
