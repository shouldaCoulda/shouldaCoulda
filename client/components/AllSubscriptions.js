import React from "react";
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

const AllSubscriptions = () => {
  const { subscriptions, getSubscriptions } = useSubscription();
  // getSubscriptions();
  // console.log("this is real data", subscriptions);
  const defualtSubscriptions = [];

  subscriptions.map((sub) => {
    defualtSubscriptions.push(sub);
  });

  // console.log("this is modified data", defualtSubscriptions);
  // console.log("this is dummydata", dummyData);
  return (
    <div>
      {/* {dummyData.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.imageUrl} width="150" />
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>
              <a href={item.websiteUrl}>Unsubscribe</a>
            </div>
          </div>
        );
      })} */}
      {subscriptions.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllSubscriptions;