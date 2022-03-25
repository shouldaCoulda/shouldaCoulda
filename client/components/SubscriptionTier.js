import React from "react";
import { useGuestData } from "../contexts/GuestDataContext";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const SubscriptionTier = () => {
  let { currentUser, usersSubscriptions } = useAuth();
  let { subscriptions } = useGuestData();
  let curSubscriptions = [];

  let count = 0;
  function setCount() {
    count++;
    return count;
  }

  if (currentUser) {
    curSubscriptions = usersSubscriptions;
  } else {
    curSubscriptions = subscriptions;
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
      {curSubscriptions.map((sub) => {
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
      <Link to={"/chart"}>
        <button className="nextButton">Show me the money!</button>
      </Link>
    </section>
  );
};
