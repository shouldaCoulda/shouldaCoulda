import React, { useState } from "react";
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
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import AddSubscription from "./AddSubscription";

export const SelectionScreen = () => {
  const { defaultSubscriptions } = useSubscription();
  const { writeSubscriptions, usersSubscriptions, currentUser } = useAuth();
  const [shown, setShown] = useState(false);
  const isSelected = Array(defaultSubscriptions.length).fill(false);

  function handleClick(e, index) {
    e.preventDefault();
    isSelected[index] = !isSelected[index];
    if (e.currentTarget.className.includes("selected")) {
      e.currentTarget.className = "card";
    } else {
      e.currentTarget.className += " selected";
    }
  }
  const history = useHistory();

  function handleSubmit(e) {
    if (currentUser) {
      e.preventDefault();
      var data = [];
      defaultSubscriptions.map((element, i) => {
        if (isSelected[i]) {
          data.push(element);
        }
      });
      writeSubscriptions(data);
      history.push("/subscriptioninfo");
    } else {
      e.preventDefault();
      var datas = [];
      defaultSubscriptions.map((element, i) => {
        if (isSelected[i]) {
          datas.push(element);
        }
      });
      setSubscriptions(datas);
      history.push("/subscriptioninfo");
    }
  }

  function checkIsSelected(uid) {
    let uids = [];
    for (let i = 0; i < usersSubscriptions.length; i++) {
      uids.push(usersSubscriptions[i].uid);
    }
    if (uids.includes(uid)) {
      return "card selected";
    }
    return "card";
  }
  function toggleForm() {
    setShown(!shown);
  }

  return (
    <>
      <Box
        sx={{ mr: 2, display: { xs: "none", md: "flex" }, flexWrap: "wrap" }}
      >
        <Box
          sx={{ mr: 2, display: { xs: "none", md: "flex" }, flexWrap: "wrap" }}
        >
          {defaultSubscriptions.map((sub, index) => {
            let str = checkIsSelected(sub.uid);
            return (
              <Box
                onClick={(event) => handleClick(event, index)}
                key={sub.name}
              >
                <Card
                  sx={{
                    maxWidth: 150,
                    margin: 1,
                    padding: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    src={sub.imageUrl}
                    alt="green iguana"
                    sx={{
                      height: 120,
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {sub.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
        <Box>
          {shown ? (
            <Box>
              <AddSubscription />
              <Button onClick={toggleForm}>cancel</Button>
            </Box>
          ) : (
            <Box>
              <Typography gutterBottom variant="p" component="div">
                have a subscription not shown here?
                <Button onClick={toggleForm}>Add</Button>
              </Typography>
            </Box>
          )}
        </Box>
        <Box>
          <Button onClick={handleSubmit}>Next</Button>
        </Box>
      </Box>
    </>
  );
};

export default SelectionScreen;
