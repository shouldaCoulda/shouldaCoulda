import React, { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Typography,
  Box,
  Button,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  TableBody,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import AddIcon from "@mui/icons-material/Add";
import AddSubscription from "../AddSubscription";

import { styled } from "@mui/material/styles";
const SubscriptionTable = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedFourm, setExpandedfourm] = React.useState(false);

  const {
    usersSubscriptions,
    getTotalSubscriptions,
    removeSubscription,
    getTotal,
  } = useAuth();

  function handleDelete(e, uid) {
    removeSubscription(uid);
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleAddClick = () => {
    setExpandedfourm(!expandedFourm);
  };

  return (
    <Card sx={{ width: "85%" }}>
      <CardHeader
        title="Subscriptions"
        subheader={`Monthly total: ${getTotalSubscriptions()}`}
      />

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleAddClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <AddIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TableContainer sx={{ marginBottom: 6 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Logo</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersSubscriptions.map((sub, index) => {
                  return (
                    <TableRow
                      key={sub.uid}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <a
                          href={sub.websiteUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <img src={sub.imageUrl} style={{ height: 45 }} />
                        </a>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {sub.name}
                      </TableCell>
                      <TableCell align="right">{sub.price}</TableCell>
                      <TableCell>
                        <Button
                          className="logoutButton"
                          onClick={(e) => handleDelete(e, sub.uid)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
      <Collapse in={expandedFourm} timeout="auto" unmountOnExit>
        <CardContent>
          <AddSubscription />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SubscriptionTable;
