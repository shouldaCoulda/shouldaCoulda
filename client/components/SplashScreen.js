import { async } from "@firebase/util";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSubscription } from "../contexts/SubscriptionContext";

const dummyData = [
  {
    id: 1,
    name: "Netflix",
    price: "9.99",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
    websiteUrl:
      "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fcancelplan",
  },
  {
    name: "Spotify",
    price: "9.99",
    imageUrl: "https://source.unsplash.com/random",
    websiteUrl: "https://support.spotify.com/us/article/cancel-premium/",
  },
  {
    name: "Youtube Premium",
    price: "11.99",
    imageUrl: "https://source.unsplash.com/random",
    websiteUrl: "https://www.youtube.com/paid_memberships?ybp=mAEK",
  },
  {
    name: "Hulu",
    price: "12.99",
    imageUrl: "https://source.unsplash.com/random",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
];

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
