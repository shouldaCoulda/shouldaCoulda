import React from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useGuestData } from "../contexts/GuestDataContext";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

export const SelectionScreen = () => {
  const { defaultSubscriptions } = useSubscription();
  const { writeSubscriptions, usersSubscriptions, currentUser } = useAuth();

  const isSelected = Array(defaultSubscriptions.length).fill(false);
  const guestData = useGuestData();
  const { expenses, subscriptions, setSubscriptions } = useGuestData();

  function handleClick(e, index) {
    console.log("click", e.currentTarget);
    console.log(isSelected);
    isSelected[index] = !isSelected[index];
    if (e.currentTarget.className.includes("selected")) {
      e.currentTarget.className = "card";
    } else {
      e.currentTarget.className += " selected";
    }
    // history.push("/subscriptionInfo");
  }
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    var data = [];
    defaultSubscriptions.map((element, i) => {
      if (isSelected[i]) {
        data.push(element);
      }
    });
    writeSubscriptions(data);
    history.push("/subscriptioninfo");
  }

  function checkIsSelected(uid) {
    let uids = [];
    for (let i = 0; i < usersSubscriptions.length; i++) {
      uids.push(usersSubscriptions[i].uid);
    }
    if (uids.includes(uid)) {
      return 10;
    }
    return 0;
  }

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {defaultSubscriptions.map((sub, index) => {
          let str = checkIsSelected(sub.uid);
          return (
            <Card
              sx={{
                maxWidth: 120,
                margin: 2,
                boxShadow: str,
              }}
              onClick={(event) => handleClick(event, index)}
              key={sub.name}
            >
              <CardMedia
                component="img"
                src={sub.imageUrl}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="p" component="div">
                  {sub.name}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
      <Button className="nextButton" onClick={handleSubmit}>
        Next
      </Button>

      {/* <div>
        <div className="defaultCardContainer">
          {defaultSubscriptions.map((sub, index) => {
            let str = checkIsSelected(sub.uid);
            return (
              <div
                key={sub.name}
                className={str}
                onClick={(event) => handleClick(event, index)}
                id={sub.name}
              >
                <img src={sub.imageUrl} className="cardImg"></img>
                <p>{sub.name}</p>
              </div>
            );
          })}
        </div>
        <div className="defaultCardContainer">
          <button className="nextButton" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div> */}
    </>
  );
};

export default SelectionScreen;
