import React from "react";
import { useGuestData } from "../contexts/GuestDataContext";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";

const subscriptions = [
  {
    imageUrl:
      "https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579609-yumminkysocialmedia08_83079.png",
    name: "Youtube Premium",
    price: { basic: "4.99", extra: "9.99", super: "14.99" },
    uid: "6ade7c52a8b",
    websiteUrl: "https://www.youtube.com/paid_memberships?ybp=mAEK",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    name: "Spotify",
    price: { basic: "4.99", extra: "9.99", super: "14.99" },
    uid: "76ade7c52a8",
    websiteUrl: "https://support.spotify.com/us/article/cancel-premium/",
  },
  {
    imageUrl:
      "https://i.pinimg.com/474x/d2/64/3a/d2643ac76db3e1f3fd09fea9ef8eae00.jpg",
    name: "HBO Max",
    price: { basic: "4.99", extra: "9.99", super: "14.99" },
    uid: "7c52a8bf5a0",
    websiteUrl: "https://help.hbomax.com/us/Answer/Detail/000001191",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Apple_TV.svg/1200px-Apple_TV.svg.png",
    name: "Apple TV",
    price: { basic: "4.99", extra: "9.99", super: "14.99" },
    uid: "8bf5a01a33e",
    websiteUrl: "https://support.apple.com/en-us/HT212048",
  },
  {
    imageUrl:
      "https://toppng.com/uploads/preview/logos-download-black-apple-music-logo-transparent-11562935177ggugsp6gy1.png",
    name: "Apple Music",
    price: { basic: "4.99", extra: "9.99", super: "14.99" },
    uid: "de7c52a8bf5",
    websiteUrl: "https://support.apple.com/en-us/HT212047",
  },
  {
    imageUrl: "https://cdn.iconscout.com/icon/free/png-256/tidal-282241.png",
    name: "Tidal",
    price: { basic: "4.99", extra: "9.99", super: "14.99" },
    uid: "e7c52a8bf5a",
    websiteUrl:
      "https://support.tidal.com/hc/en-us/articles/201314601-Cancel-TIDAL-Subscription-or-Trial",
  },
];

export const SubscriptionTier = () => {
  //   const { subscriptions } = useGuestData();

  let count = 0;
  function setCount() {
    count++;
    return count;
  }

  return (
    <section>
      <h1>Select your plan</h1>
      {subscriptions.map((sub) => {
        return (
          <div id="tierTable" key={sub.uid}>
            <div id="iconTable">
              <img id="tierIcon" src={sub.imageUrl}></img>
              <h4>{sub.name}</h4>
            </div>
            <div id="priceTierTable">
              {Object.entries(sub.price).map(([key, value]) => {
                return (
                  <div className="singleTier" key={setCount()}>
                    <h4 className="singleTierChild">{value}</h4>
                    <h5 className="singleTierChild">{key}</h5>
                  </div>
                );
              })}
              <Slider steps={3} marks={true} id="priceTierSlider"></Slider>
            </div>
          </div>
        );
      })}
    </section>
  );
};
