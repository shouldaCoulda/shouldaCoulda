import React from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useGuestData } from "../contexts/GuestDataContext";

export const Carousel = () => {
  const { defualtSubscriptions } = useSubscription();
  const { writeSubscriptions } = useAuth();
  const isSelected = Array(defualtSubscriptions.length).fill(false);
  const guestData = useGuestData();
  const { expenses, subscriptions } = useGuestData();

  function handleClick(e, index) {
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
    console.log("clicked");
    defualtSubscriptions.map((element, i) => {
      if (isSelected[i]) {
        subscriptions.push(element);
        console.log(element);
        history.push("/subscriptionInfo");
      }
    });
  }
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

  return (
    <>
      <div>
        <div className="defaultCardContainer">
          {defualtSubscriptions.map((sub, index) => {
            return (
              <div
                key={sub.name}
                className="card"
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
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
