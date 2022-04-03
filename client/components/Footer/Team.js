import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@mui/material";

var team = [
  {
    name: "Chao Chou",
    github: "https://github.com/StudentCZ",
    linkedin: "https://www.linkedin.com/in/chao-zhou8/",
  },
  {
    name: "Dale Luce",
    github: "https://github.com/DaleLuce",
    linkedin: "https://www.linkedin.com/in/daleowenluce/",
  },
  {
    name: "Joshua Constine",
    github: "https://github.com/joshconstine",
    linkedin: "https://www.linkedin.com/in/joshua-constine/",
  },
  {
    name: "Robert Watkins",
    github: "https://github.com/rwatkins123",
    linkedin: "https://www.linkedin.com/in/rob-watkins-3397938/",
  },
];

const Team = () => {
  return (
    <Box className="column" sx={{ marginTop: "10%" }}>
      <Box sx={{ margin: 4 }}>
        <Typography varient="h1">team</Typography>
      </Box>
      {team.map((member, i) => {
        return (
          <Box key={i} className="column" sx={{ padding: 2 }}>
            <Typography varient="h6">{member.name}</Typography>
            <Typography varient="p">
              ${member.github}/ ${member.linkedin}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
export default Team;
