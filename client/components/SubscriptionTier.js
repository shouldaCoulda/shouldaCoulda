import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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

export const SubscriptionTier = () => {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  let { writeSubscriptions, currentUser, usersSubscriptions } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    var data = [];
    usersSubscriptions.map((element, i) => {
      // if (isSelected[i]) {
      data.push(element);
      // }
    });

    writeSubscriptions(data);
    history.push("/");
  }

  function handleClick(e, index, plan) {
    e.preventDefault();
    if (e.currentTarget.className.includes("selected")) {
      e.currentTarget.className = "";
    } else {
      e.currentTarget.className += " selected";
    }
    setPrice(index, plan);
  }

  function setPrice(index, plan) {
    usersSubscriptions[index].price = plan.price;
  }

  return (
    <Box
      sx={{
        mr: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography gutterBottom variant="h3">
        Select your plan
      </Typography>
      {usersSubscriptions.map((sub, index) => {
        {
          if (sub.plans && sub.plans.length > 0) {
            let isSelected = Array(sub.plans.length).fill(false);
            return (
              <Box
                key={index}
                sx={{
                  mr: 2,
                  display: "flex",
                  width: 1000,
                }}
              >
                <Box
                  sx={{
                    alignSelf: "flex-start",
                    height: 50,
                    marginLeft: 5,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img style={{ height: 45 }} src={sub.imageUrl}></img>
                  <Typography gutterBottom variant="p">
                    {sub.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mr: 2,
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  {sub.plans.map((plan, i) => {
                    if (isSelected[i]) {
                    }
                    return (
                      <Box onClick={(e) => handleClick(e, index, plan)} key={i}>
                        <Card
                          sx={{
                            mr: 2,
                            display: "flex",
                            flexDirection: "column",
                            padding: 2,
                            margin: 1,
                            border: "none",
                            alignItems: "center",
                          }}
                        >
                          <Typography gutterBottom variant="p">
                            {plan.tier}
                          </Typography>
                          <Typography gutterBottom variant="p">
                            {plan.price}
                          </Typography>
                        </Card>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          }
        }
      })}

      <Button
        className="tierButton"
        onClick={handleSubmit}
        sx={{
          marginTop: 5,
          borderWidth: 0,
          boxShadow: "3px 2px 10px darkgray",
          borderCollapse: "collapse",
          color: "black",
          borderRadius: 40,
        }}
      >
        Next
      </Button>
    </Box>
  );
};
