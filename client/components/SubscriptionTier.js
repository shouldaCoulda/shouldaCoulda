import React from "react";
import { useGuestData } from "../contexts/GuestDataContext";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ButtonGroup, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";

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

  console.log("anything");

  function handleClick(e, index, plan) {
    e.preventDefault();
    console.log("plan-------->", plan);
    isSelected[index] = !isSelected[index];
    if (e.currentTarget.className.includes("selected")) {
      e.currentTarget.className = "singleTier";
    } else {
      e.currentTarget.className = "singleTier selected";
    }
  }

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

  return (
    <section>
      <h1>Select your plan</h1>
      {usersSubscriptions.map((sub, index) => {
        {
          if (sub.plans && sub.plans.length > 0) {
            return (
              <div id="tierTable" sub={sub} key={sub.uid}>
                <div id="iconTable">
                  <img id="tierIcon" src={sub.imageUrl}></img>
                  <p>{sub.name}</p>
                </div>
                <div id="priceTierTable">
                  {sub.plans.map((plan, i) => {
                    return (
                      // <Box
                      //   key={i}
                      //   sx={{
                      //     maxWidth: { xs: 320, sm: 480 },
                      //   }}
                      // >
                      <Tabs
                        orientation="horizontal"
                        key={setCount()}
                        value={false}
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="scrollable prevent tabs example"
                      >
                        <Tab
                          onClick={(event) => handleClick(event, index, plan)}
                          label={
                            <div className="singleTier">
                              <h4>${plan.price}</h4>
                              <p>{plan.tier}</p>
                            </div>
                          }
                        ></Tab>
                      </Tabs>
                      // </Box>
                    );
                  })}
                </div>
              </div>
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
    </section>
  );
};
