import React, { useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import PopupButton from "./PopupButton";
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
import { useHistory } from "react-router-dom";
import AddIncome from "./Income/AddIncome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";

import { styled } from "@mui/material/styles";

const Profile = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const {
    currentUser,
    usersSubscriptions,
    removeSubscription,
    getTotal,
    writeUserData,
    usersExpenses,
    getTotalExpenses,
    removeExpense,
    usersIncomes,
    removeIncome,
  } = useAuth();
  const history = useHistory();

  function handleDelete(e, uid) {
    removeSubscription(uid);
  }
  function handleDeleteExpense(e, uid) {
    removeExpense(uid);
  }
  async function handleDeleteIncome(e, uid) {
    removeIncome(uid);
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
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Box
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Subscriptions</Typography>
        <TableContainer>
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
                    key={sub.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={sub.imageUrl} style={{ height: 45 }} />
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
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography type="b">
                    Total Monthly cost: {getTotal()}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography type="b">
                    Total Anual cost: {(getTotal() * 12).toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            width: 200,
            height: 1,
            border: 0.5,
            borderColor: "lightgray",
            margin: 10,
            alignSelf: "center",
          }}
        />
        <Typography variant="h4">Expenses</Typography>
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
        <Typography variant="h4">Incomes</Typography>
        <TableContainer sx={{ marginBottom: 6 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">ammount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersIncomes.map((income, index) => {
                return (
                  <TableRow
                    key={income.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {income.name}
                    </TableCell>
                    <TableCell align="right">{income.ammount}</TableCell>
                    <TableCell>
                      <Button
                        className="logoutButton"
                        onClick={(e) => handleDeleteIncome(e, income.uid)}
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
                    Total Monthly income: {getTotalExpenses()}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography type="b">
                    Total Anual income: {(getTotalExpenses() * 12).toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer> */}
      <Card sx={{ minWidth: 600 }}>
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
      <AddIncome />
      <PopupButton />
      {/* </Box> */}
    </Box>
  );
};

export default Profile;
