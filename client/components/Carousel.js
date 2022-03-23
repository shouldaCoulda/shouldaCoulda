import React from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
export const Carousel = () => {
  const { defualtSubscriptions } = useSubscription();
  const { writeSubscriptions } = useAuth();
  const isSelected = Array(defualtSubscriptions.length).fill(false);

  function handleClick(e, index) {
    isSelected[index] = !isSelected[index];
    if (e.target.className.includes("selected")) {
      e.target.className = "card-img";
    } else {
      e.target.className += " selected";
    }
  }
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    const data = [];
    defualtSubscriptions.map((element, i) => {
      if (isSelected[i]) {
        data.push(element);
      }
    });
    await writeSubscriptions(data);
    history.push("/profile");
  }

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
                <img src={sub.imageUrl} id="cardImg"></img>
                <p>{sub.name}</p>
              </div>
            );
          })}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Carousel;
