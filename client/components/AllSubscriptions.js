import React from 'react';

const dummyData = [
  {
    id: 1,
    name: 'Netflix',
    price: '9.99',
    imageUrl:
      'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png',
    websiteUrl:
      'https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fcancelplan',
  },
  {
    name: 'Spotify',
    price: '9.99',
    imageUrl: 'https://source.unsplash.com/random',
    websiteUrl: 'https://support.spotify.com/us/article/cancel-premium/',
  },
  {
    name: 'Youtube Premium',
    price: '11.99',
    imageUrl: 'https://source.unsplash.com/random',
    websiteUrl: 'https://www.youtube.com/paid_memberships?ybp=mAEK',
  },
  {
    name: 'Hulu',
    price: '12.99',
    imageUrl: 'https://source.unsplash.com/random',
    websiteUrl: 'https://help.hulu.com/s/article/manage-subscription',
  },
];

const AllSubscriptions = () => {
  console.log('this is', dummyData);
  return <div></div>;
};

export default AllSubscriptions;
