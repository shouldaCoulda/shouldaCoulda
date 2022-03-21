import React from "react";

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
  return (
    <div id="carouselContainer">
      <div id="carouselDiv">
        {subscriptionData.map((sub) => {
          return (
            <div key={sub.name} className="card stacked" id="sub.name">
              <img src={sub.imageUrl} id="cardImg"></img>
              <h3>{sub.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
