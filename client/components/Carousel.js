import React from "react";
import { useSubscription } from "../contexts/SubscriptionContext";

export const Carousel = () => {
  const { defualtSubscriptions } = useSubscription();
  return (
    <div id="carouselContainer">
      <div id="carouselDiv">
        {defualtSubscriptions.map((sub, i) => {
          return (
            <div key={i} className="card stacked" id="sub.name">
              {/* <img src={sub.imageUrl} id="cardImg"></img> */}
              <h3>{sub.name}</h3>
            </div>
          );
        })}
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Carousel;
