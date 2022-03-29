import React from "react";
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
} from "@mui/material";

const Profile = () => {
  const { currentUser, usersSubscriptions, removeSubscription, getTotal } =
    useAuth();

  function handleDelete(e, uid) {
    removeSubscription(uid);
  }
  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography gutterBottom variant="p" component="div">
        Email: {currentUser?.email}
      </Typography>
      <PopupButton />
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
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
    </Box>
  );
};

export default Profile;
