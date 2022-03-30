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
  let { currentUser, usersSubscriptions } = useAuth();
  let count = 0;
  function setCount() {
    count++;
    return count;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleClick(e, index) {
    console.log("clicked");
    // if (e.currentTarget.className.includes("tierSelected")) {
    //   e.currentTarget.className = "singleTier";
    // } else {
    //   e.currentTarget.className = "singleTier tierSelected";
    // }
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
                      <Box
                        key={i}
                        sx={{
                          maxWidth: { xs: 320, sm: 480 },
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
                            onClick={handleClick}
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
