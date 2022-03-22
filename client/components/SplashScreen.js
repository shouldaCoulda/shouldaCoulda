import { async } from "@firebase/util";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSubscription } from "../contexts/SubscriptionContext";

const SplashScreen = () => {
  const { defualtSubscriptions } = useSubscription();
  const { writeSubscriptions } = useAuth();
  const isSelected = Array(dummyData.length).fill(false);

  function handleClick(e, index) {
    isSelected[index] = !isSelected[index];
    if (e.target.className.includes("selected")) {
      e.target.className = "card-img";
    } else {
      e.target.className += " selected";
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const data = [];
    defualtSubscriptions.map((element, i) => {
      if (isSelected[i]) {
        data.push(element);
      }
    });
    await writeSubscriptions(data);
  }
  return (
    <div className="card-columns">
      {dummyData.map((item, index) => {
        return (
          <div
            key={index}
            className="card defaultCards"
            onClick={(event) => handleClick(event, index)}
          >
            <img
              className="card-img"
              src={item.imageUrl}
              alt="Card image cap"
            ></img>
          </div>
        );
      })}
      <button onClick={handleSubmit}>add subs to user</button>
    </div>
  );
};

export default SplashScreen;
