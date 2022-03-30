import React, { useRef } from "react";
import { useGuestData } from "../contexts/GuestDataContext";
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

  const isSelected = Array(usersSubscriptions.length).fill(false);
  console.log(isSelected);
  let count = 0;
  function setCount() {
    count++;
    return count;
  }

  // function handleClick(e, index, plan) {
  //   e.preventDefault();
  //   console.log("plan-------->", plan);
  //   isSelected[index] = !isSelected[index];
  //   if (e.currentTarget.className.includes("selected")) {
  //     e.currentTarget.className = "singleTier";
  //   } else {
  //     e.currentTarget.className = "singleTier selected";
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    var data = [];
    usersSubscriptions.map((element, i) => {
      if (isSelected[i]) {
        data.push(element);
      }
      console.log("mic check", data);
    });

    writeSubscriptions(data);
    history.push("/subscriptioninfo");
  }
  function handleClick(e, index, plan) {
    e.preventDefault();
    console.log("plan-------->", plan);
    isSelected[index] = !isSelected[index];
    if (e.currentTarget.className.includes("selected")) {
      e.currentTarget.className = "";
    } else {
      e.currentTarget.className += " selected";
    }
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
      <Typography gutterBottom variant="h3">
        Select your plan
      </Typography>
      {usersSubscriptions.map((sub, index) => {
        // const chosenRef = useRef(0);

        {
          if (sub.plans && sub.plans.length > 0) {
            return (
              <Box
                key={index}
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  width: 1000,
                }}
              >
                <Box
                  sx={{
                    alignSelf: "flex-start",
                    height: 50,
                  }}
                >
                  <img id="tierIcon" src={sub.imageUrl}></img>
                  <p>{sub.name}</p>
                </Box>
                <Box
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    alignSelf: "center",
                  }}
                >
                  {sub.plans.map((plan, i) => {
                    return (
                      <Box
                        key={i}
                        onClick={(event) => handleClick(event, index, plan)}
                        sx={{
                          padding: 0.2,
                          border: "none",
                        }}
                      >
                        <Tabs
                          orientation="horizontal"
                          key={setCount()}
                          value={false}
                          variant="scrollable"
                          scrollButtons={false}
                          aria-label="scrollable prevent tabs example"
                        >
                          <Tab
                            label={
                              <div className="singleTier">
                                <h4>${plan.price}</h4>
                                <p>{plan.tier}</p>
                              </div>
                            }
                          ></Tab>
                        </Tabs>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
              // <div id="tierTable" sub={sub} key={sub.uid}>
              //   <div id="iconTable">
              //     <img id="tierIcon" src={sub.imageUrl}></img>
              //     <p>{sub.name}</p>
              //   </div>
              //   <div id="priceTierTable">
              //     {sub.plans.map((plan, i) => {
              //       return (
              //         // <Box
              //         //   key={i}
              //         //   sx={{
              //         //     maxWidth: { xs: 320, sm: 480 },
              //         //   }}
              //         // >
              //         <Tabs
              //           orientation="horizontal"
              //           key={setCount()}
              //           value={false}
              //           variant="scrollable"
              //           scrollButtons={false}
              //           aria-label="scrollable prevent tabs example"
              //         >
              //           <Tab
              //             onClick={(event) => handleClick(event, index, plan)}
              //             label={
              //               <div className="singleTier">
              //                 <h4>${plan.price}</h4>
              //                 <p>{plan.tier}</p>
              //               </div>
              //             }
              //           ></Tab>
              //         </Tabs>
              //         // </Box>
              //       );
              //     })}
              //   </div>
              // </div>
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
