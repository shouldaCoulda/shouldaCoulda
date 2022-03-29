import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import PopupButton from "./PopupButton";
import PopupBox from "./PopupBox";
import {
  Container,
  AppBar,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
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
    <Box>
      <p>Email:</p> {currentUser?.email}
      {/* <p>Subscriptions:</p>{" "} */}
      <div>
        {/* <Link to='/add' type='button'> */}
        <PopupButton />
        {/* </Link> */}
      </div>
      <div style={{ marginTop: "50px" }}>
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
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <table className="user-sub-table">
          <thead>
            <tr>
              <th></th>
              <th>Unsubscribe Link:</th>
              <th>Subscription:</th>
              <th>Cost:</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usersSubscriptions.map((sub, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a
                      href={sub.websiteUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={sub.imageUrl} className="profileIcon" />
                    </a>
                  </td>
                  <td>{sub.name}</td>
                  <td>{sub.price}/month</td>

                  <td>
                    <button
                      className="logoutButton"
                      onClick={(e) => handleDelete(e, sub.uid)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Total: </td>
              <td className="user-sub-total">
                ${getTotal()}
                /month!{" "}
              </td>
            </tr>
          </tfoot>
        </table> */}
      </div>
    </Box>
  );
};

export default Profile;
