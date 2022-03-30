import React from "react";
import { useGuestData } from "../contexts/GuestDataContext";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  InputLabel,
  Input,
  FormHelperText,
  InputAdornment,
  TextField,
} from "@mui/material";

export const SubscriptionTier = () => {
  const history = useHistory();
  let { currentUser, usersSubscriptions } = useAuth();
  let count = 0;
  function setCount() {
    count++;
    return count;
  }

  function handleClick(e, index) {
    if (e.currentTarget.className.includes("tierSelected")) {
      e.currentTarget.className = "singleTier";
    } else {
      e.currentTarget.className = "singleTier tierSelected";
    }
  }

  return (
    <section>
      <h1>Select your plan</h1>
      {usersSubscriptions.map((sub) => {
        {
          if (sub.plans && sub.plans.length > 0) {
            return (
              <div id="tierTable" key={sub.uid}>
                <div id="iconTable">
                  <img id="tierIcon" src={sub.imageUrl}></img>
                  <p>{sub.name}</p>
                </div>
                <div id="priceTierTable">
                  {sub.plans.map((plan) => {
                    return (
                      <div
                        className="singleTier"
                        onClick={handleClick}
                        key={setCount()}
                      >
                        <h4 className="singleTierChild">${plan.price}</h4>
                        <p className="singleTierChild">{plan.tier}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        }
      })}

      <Button
        onClick={() => history.push("/")}
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
    </section>
  );
};
