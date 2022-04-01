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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";

import { styled } from "@mui/material/styles";
const ExpenseTable = () => {
  const [expanded, setExpanded] = React.useState(false);

  const { usersExpenses, getTotalExpenses, removeExpense } = useAuth();
  function handleDeleteExpense(e, uid) {
    removeExpense(uid);
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

  return (
    <Card sx={{ minWidth: 700 }}>
      <CardHeader title="Expenses" />

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
                {usersExpenses.map((expense, index) => {
                  return (
                    <TableRow
                      key={expense.uid}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <img src={expense.imageUrl} style={{ height: 45 }} />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {expense.name}
                      </TableCell>
                      <TableCell align="right">{expense.price}</TableCell>
                      <TableCell>
                        <Button
                          className="logoutButton"
                          onClick={(e) => handleDeleteExpense(e, expense.uid)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography type="b">
                      Total Monthly cost: {getTotalExpenses()}
                    </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography type="b">
                      Total Anual cost: {(getTotalExpenses() * 12).toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExpenseTable;
