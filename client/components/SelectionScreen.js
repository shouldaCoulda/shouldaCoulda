import React from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useGuestData } from "../contexts/GuestDataContext";

export const SelectionScreen = () => {
  const { defaultSubscriptions } = useSubscription();
  const { writeSubscriptions, usersSubscriptions } = useAuth();

  const isSelected = Array(defaultSubscriptions.length).fill(false);
  const guestData = useGuestData();
  const { expenses, subscriptions } = useGuestData();

  function handleClick(e, index) {
    console.log(usersSubscriptions);
    isSelected[index] = !isSelected[index];
    if (e.currentTarget.className.includes("selected")) {
      e.currentTarget.className = "card";
    } else {
      e.currentTarget.className += " selected";
    }
    // history.push("/subscriptionInfo");
  }
  const history = useHistory();

  //if youre logged in
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const data = [];
  //   defualtSubscriptions.map((element, i) => {
  //     if (isSelected[i]) {
  //       data.push(element);
  //       console.log(data);
  //     }
  //   });
  //   await writeSubscriptions(data);
  // }
  // else  use the below handle submit
  function handleSubmit(e) {
    e.preventDefault();
    const data = [];
    defaultSubscriptions.map((element, i) => {
      if (isSelected[i]) {
        subscriptions.push(element);
        console.log(element);
        history.push("/subscriptionInfo");
      }
    });
    writeSubscriptions(data);
    history.push("/profile");
  }
  function checkIsSelected(uid) {
    let uids = [];
    for (let i = 0; i < usersSubscriptions.length; i++) {
      uids.push(usersSubscriptions[i].uid);
    }
    if (uids.includes(uid)) {
      console.log("found equal", uid);
      return "card selected";
    }
    return "card";
  }

  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default SelectionScreen;
