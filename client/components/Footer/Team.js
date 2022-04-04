import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, Avatar, Link } from "@mui/material";

var team = [
  {
    name: "Chao Chou",
    github: "https://github.com/StudentCZ",
    linkedin: "https://www.linkedin.com/in/chao-zhou8/",
    image: "https://ca.slack-edge.com/T024FPYBQ-U02T8M9DL7N-f400af9fd137-512"
  },
  {
    name: "Dale Luce",
    github: "https://github.com/DaleLuce",
    linkedin: "https://www.linkedin.com/in/daleowenluce/",
    image: "https://ca.slack-edge.com/T024FPYBQ-U02TW4RK6HW-3622e92ee48e-512"
  },
  {
    name: "Joshua Constine",
    github: "https://github.com/joshconstine",
    linkedin: "https://www.linkedin.com/in/joshua-constine/",
    image: "https://ca.slack-edge.com/T024FPYBQ-U02T6DKJ875-8e062ebdd3c5-512"
  },
  {
    name: "Robert Watkins",
    github: "https://github.com/rwatkins123",
    linkedin: "https://www.linkedin.com/in/rob-watkins-3397938/",
    image: "https://ca.slack-edge.com/T024FPYBQ-U02TK27M273-7bdda6ba010a-512"
  },
];

const Team = () => {
  return (
    <Box className="column" sx={{ marginTop: "10%" }}>
      <Box sx={{ margin: 4 }}>
        <Typography varient="h1">Meet The Team:</Typography>
      </Box>
      {team.map((member, i) => {
        return (
          <Box key={i} className="column" sx={{ padding: 2 }}>
            <Avatar src={member.image} />
            <Typography varient="h4">{member.name}</Typography>
            <Link href={member.github} target="_blank" rel="noreferrer noopener" varient="p">Github</Link>
            <Link href={member.linkedin} target="_blank" rel="noreferrer noopener" varient="p">LinkedIn</Link>
          </Box>
        );
      })}
    </Box>
  );
};
export default Team;
