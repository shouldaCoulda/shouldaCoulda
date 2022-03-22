import React from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";

export const Carousel = () => {
  const { defualtSubscriptions } = useSubscription();
  const { writeSubscriptions } = useAuth();
  const isSelected = Array(subscriptionData.length).fill(false);

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
    <>
      <div id="carouselContainer">
        <div id="carouselDiv">
          {defualtSubscriptions.map((sub) => {
            return (
              <div
                key={sub.name}
                className="card"
                onClick={handleClick}
                id={sub.name}
              >
                <img src={sub.imageUrl} id="cardImg"></img>
                <h3 id="cardTitle">{sub.name}</h3>
              </div>
            );
          })}
        </div>
        <Link to="/Charts">
          <button>Submit</button>
        </Link>

      </div>
    </>
  );
};

export default Carousel;
