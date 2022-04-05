import React, { useState } from "react";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
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
      e.currentTarget.className = "";
    } else {
      e.currentTarget.className += " selected";
    }
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
      return " selected";
    }
    return "";
  }

  function toggleForm() {
    setShown(!shown);
  }

  return (
    <>
      <Box sx={{ mb: 15 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",

            // backgroundColor: "red",
          }}
        >
          {defaultSubscriptions.map((sub, index) => {
            let str = checkIsSelected(sub.uid);
            return (
              <Box
                onClick={(event) => handleClick(event, index)}
                key={sub.name}
                sx={{ margin: "auto" }}
              >
                <Card
                  sx={{
                    maxWidth: 100,
                    margin: 4,
                    padding: 0,
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={sub.imageUrl}
                    alt="green iguana"
                    sx={{
                      width: "100%",
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
                Do you have a subscription not shown here?
                <Button
                  onClick={toggleForm}
                  sx={{
                    color: "black",
                    backgroundColor: "none",
                    border: "none",
                    backgroundColor: "transparent",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "transparent",
                      color: "#1976d2",
                    },
                  }}
                >
                  Add
                </Button>
              </Typography>
            </Box>
          )}
        </Box>
        <Button
          onClick={handleSubmit}
          sx={{
            marginTop: 5,
            borderWidth: 0,
            boxShadow: "3px 2px 10px darkgray",
            borderCollapse: "collapse",
            color: "black",
            borderRadius: 40,
            width: 90,
          }}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default SelectionScreen;
