<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from "react";
import { useSubscription } from "../contexts/SubscriptionContext";
>>>>>>> 9205f1545a237ab8856dbf9bf910180d1b424d8f

// const dummyData = [
//   {
//     id: 1,
<<<<<<< HEAD
//     name: 'Netflix',
//     price: '9.99',
//     imageUrl:
//       'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png',
//     websiteUrl:
//       'https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fcancelplan',
//   },
//   {
//     name: 'Spotify',
//     price: '9.99',
//     imageUrl: 'https://source.unsplash.com/random',
//     websiteUrl: 'https://support.spotify.com/us/article/cancel-premium/',
//   },
//   {
//     name: 'Youtube Premium',
//     price: '11.99',
//     imageUrl: 'https://source.unsplash.com/random',
//     websiteUrl: 'https://www.youtube.com/paid_memberships?ybp=mAEK',
//   },
//   {
//     name: 'Hulu',
//     price: '12.99',
//     imageUrl:
//       'https://play-lh.googleusercontent.com/4whGAVjZGrrlNxzheKAfBXrxggtyAb4euWLeQI8fDfVfdnFEZjE0DZTJ8DKoh64pqcIa',
//     websiteUrl: 'https://help.hulu.com/s/article/manage-subscription',
=======
//     name: "Netflix",
//     price: "9.99",
//     imageUrl:
//       "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
//     websiteUrl:
//       "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fcancelplan",
//   },
//   {
//     name: "Spotify",
//     price: "9.99",
//     imageUrl: "https://source.unsplash.com/random",
//     websiteUrl: "https://support.spotify.com/us/article/cancel-premium/",
//   },
//   {
//     name: "Youtube Premium",
//     price: "11.99",
//     imageUrl: "https://source.unsplash.com/random",
//     websiteUrl: "https://www.youtube.com/paid_memberships?ybp=mAEK",
//   },
//   {
//     name: "Hulu",
//     price: "12.99",
//     imageUrl: "https://source.unsplash.com/random",
//     websiteUrl: "https://help.hulu.com/s/article/manage-subscription",
>>>>>>> 9205f1545a237ab8856dbf9bf910180d1b424d8f
//   },
// ];

const AllSubscriptions = () => {
<<<<<<< HEAD
  const [subscriptions, setSubscriptions] = useState([]);
  return (
    <div>
      {subscriptions.map((item, index) => {
=======
  const { defualtSubscriptions } = useSubscription();


  return (
    <div>
      {defualtSubscriptions.map((item, index) => {
>>>>>>> 9205f1545a237ab8856dbf9bf910180d1b424d8f
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
