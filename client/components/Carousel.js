import React from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";

const subscriptionData = [
  {
    name: "Netflix",
    price: "15.49",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl:
      "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fcancelplan",
  },
  {
    name: "Spotify",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://support.spotify.com/us/article/cancel-premium/",
  },
  {
    name: "Youtube Premium",
    price: "11.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://www.youtube.com/paid_memberships?ybp=mAEK",
  },
  {
    name: "Hulu",
    price: "12.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Apple Music",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Tidal",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "HBO Max",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Peacock",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Disney+",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Amazon Prime",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Sling TV",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Apple TV",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Paramount+",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "ESPN+",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
  {
    name: "Curiosity Stream",
    price: "9.99",
    imageUrl: "https://unsplash.it/200/200",
    websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
  },
];
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
          {subscriptionData.map((sub) => {
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
