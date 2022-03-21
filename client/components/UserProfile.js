import { remove } from 'firebase/database';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { database } from '../firebase';
// import { db } from '../firebase'
// import { collection, getDocs } from 'firebase/firestore'

const selectedSubArray = [
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
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/174/174872.png',
    websiteUrl: 'https://support.spotify.com/us/article/cancel-premium/',
  },
  {
    name: 'Youtube Premium',
    price: '11.99',
    imageUrl: 'https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579609-yumminkysocialmedia08_83079.png',
    websiteUrl: 'https://www.youtube.com/paid_memberships?ybp=mAEK',
  },
  {
    name: 'Hulu',
    price: '12.99',
    imageUrl: 'https://img.apkshub.com/38/com.hulu.plus/4.23.0.4234.google/icon.png',
    websiteUrl: 'https://help.hulu.com/s/article/manage-subscription',
  },
  {
    name: 'Random',
    price: '11.99',
    imageUrl: 'https://source.unsplash.com/random',
    websiteUrl: 'https://source.unsplash.com/random',
  },
  {
    name: 'Spotify',
    price: '9.99',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/174/174872.png',
    websiteUrl: 'https://support.spotify.com/us/article/cancel-premium/',
  },
  {
    name: 'Youtube Premium',
    price: '11.99',
    imageUrl: 'https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579609-yumminkysocialmedia08_83079.png',
    websiteUrl: 'https://www.youtube.com/paid_memberships?ybp=mAEK',
  },
  {
    name: 'Hulu',
    price: '12.99',
    imageUrl: 'https://img.apkshub.com/38/com.hulu.plus/4.23.0.4234.google/icon.png',
    websiteUrl: 'https://help.hulu.com/s/article/manage-subscription',
  },
  {
    name: 'Random',
    price: '11.99',
    imageUrl: 'https://source.unsplash.com/random',
    websiteUrl: 'https://source.unsplash.com/random',
  },
];

const UserSubscriptions = () => {

  // const { subscriptions, setSubscriptions } = useState([]);
  // const subCollectionRef = collection(db, "subscriptions")

  // useEffect(() => {

  //   const getSubscriptions = async () => {
  //     const data = await getDocs(subCollectionRef)
  //     // console.log(data)
  //     setSubscriptions(data)
  //   }

  //   dispatch(getUserSubscriptions())
  // }, []);

  // const getUserSubscriptions = id => {
  //   let userSubs = selectedSubArray.filter((sub) => {
  //     if (sub.id !== id) return sub
  //   })
  //   setSubscriptions(userSubs)
  // }

  const handleDelete = (id) => {
    if(window.confirm("remove this subscription?")) {
      remove(ref(database, 'subscriptions/' + uuid))
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <table className='user-sub-table'>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}></th>
            <th style={{ textAlign: "center" }}>Unsubscribe Link:</th>
            <th style={{ textAlign: "center" }}>Subscription:</th>
            <th style={{ textAlign: "center" }}>Cost:</th>
            <th style={{ textAlign: "center" }}></th>
            <th style={{ textAlign: "center" }}></th>
          </tr>
        </thead>
        <tbody>
          {selectedSubArray.map((sub, index) => {
            return (
              <tr key={sub.id}>
                <th scope='row'>{index + 1}</th>
                <td>
                  <a href={sub.websiteUrl}><img src={sub.imageUrl} height='90'/></a>
                </td>
                <td>{sub.name}</td>
                <td>{sub.price}/month</td>
                <td>
                  <button className='edit-cost'
                  onClick={() => handleDelete(sub.id)}>Edit Cost</button>
                </td>
                <td>
                  <button className='remove-button'
                  onClick={() => handleDelete(sub.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>

      </table>

    </div>
  );
}

export default UserSubscriptions;
