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
} from "@mui/material";
import { useHistory } from "react-router-dom";
import AddIncome from "./Income/AddIncome";

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
    getOverallTotal,
    removeExpense,
    signup,
    logout,
  } = useAuth();
  const history = useHistory();

  function checkIfGuest(email) {
    let guest = email?.slice(0, 5);
    if (guest === "guest") {
      function handleSubmit() {
        currentUser.email = emailRef.current.value;
        var user = {
          uid: currentUser.uid,
          email: currentUser.email,
        };
        // logout();
        writeUserData(user);
        // history.push("/profile");
      }
      return (
        <Box>
          <Typography variant="h6">Enter your information</Typography>
          <Box>
            <FormControl>
              <InputLabel htmlFor="email">email</InputLabel>
              <Input aria-describedby="my-helper-text" inputRef={emailRef} />
              <FormHelperText>enter your email:</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="Price">Password</InputLabel>
              <Input aria-describedby="my-helper-text" inputRef={passwordRef} />
              <FormHelperText>must be 7 characters:</FormHelperText>
            </FormControl>
            <Button onClick={handleSubmit}>submit</Button>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Typography gutterBottom variant="p" component="div">
            Email: {currentUser?.email}
          </Typography> */}
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
          </TableContainer>
          <AddIncome />
          <PopupButton />
        </Box>
      );
    }
  }

  function handleDelete(e, uid) {
    removeSubscription(uid);
  }
  function handleDeleteExpense(e, uid) {
    e.preventDefault();
    removeExpense(uid);
  }

  useEffect(() => {
    checkIfGuest(currentUser?.email);
  }, []);

  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {checkIfGuest(currentUser?.email)}
    </Box>
  );
};

export default Profile;
