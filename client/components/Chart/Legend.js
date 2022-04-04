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
    <Box>
      <Typography
        sx={{
          m: 2,
          textAlign: "center",
          fontSize: { xs: 14, sm: 16, md: 18, lg: 24, xl: 30 },
        }}
      >
        Let's see what coulda been...
      </Typography>
      {/* <Box sx={{ display: "flex" }}>
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
      </Box> */}
    </Box>
  );
};

export default Legend;
