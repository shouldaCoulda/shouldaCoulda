import React from "react";
import { useChart } from "../../contexts/ChartContext";
import { Box, Typography, Button, ButtonGroup, Container } from "@mui/material";

const Legend = () => {
  const { lines, selectedLines } = useChart();

  let displayedLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (selectedLines[i] === true) {
      displayedLines.push(lines[i]);
    }
  }
  return (
    <Box>
      <Container sx={{ display: { xs: "none", md: "flex" } }}>
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
      </Container>
    </Box>
  );
};

export default Legend;
