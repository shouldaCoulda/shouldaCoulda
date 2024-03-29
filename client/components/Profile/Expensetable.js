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
  SvgIcon,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import TvIcon from "@mui/icons-material/Tv";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import LiquorIcon from "@mui/icons-material/Liquor";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import GrassIcon from "@mui/icons-material/Grass";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddExpense from "../AddExpense";
import AddIcon from "@mui/icons-material/Add";
import AddExpense from "../AddExpense";
import AddIcon from "@mui/icons-material/Add";

import { styled } from "@mui/material/styles";
const ExpenseTable = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedFourm, setExpandedfourm] = React.useState(false);

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
  const handleAddClick = () => {
    setExpandedfourm(!expandedFourm);
  };

  return (
    <Card sx={{ width: "85%" }}>
      <CardHeader
        title="Expenses"
        subheader={`Monthly total: ${getTotalExpenses()}`}
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
                {usersExpenses.map((expense, index) => {
                  return (
                    <TableRow
                      key={expense.uid}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <SvgIcon
                          component={
                            expense.name === "Alcohol"
                              ? LiquorIcon
                              : expense.name === "Cable"
                              ? TvIcon
                              : expense.name === " Tobacco Products"
                              ? SmokingRoomsIcon
                              : expense.name === " Coffee"
                              ? LocalCafeIcon
                              : expense.name === "Food Delivery/Pick-Up"
                              ? FastfoodIcon
                              : expense.name === "Marijuana"
                              ? GrassIcon
                              : expense.name === " Shopping"
                              ? ShoppingCartIcon
                              : expense.name === "Credit Card Payments"
                              ? CreditCardIcon
                              : CurrencyExchangeIcon
                          }
                          inheritViewBox
                        />
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
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
      <Collapse in={expandedFourm} timeout="auto" unmountOnExit>
        <CardContent>
          <AddExpense />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExpenseTable;
