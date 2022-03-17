// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIfb81uB0FkqnU6enS138lGRCf3NjEwX8",
  authDomain: "shouldacoulda-development.firebaseapp.com",
  projectId: "shouldacoulda-development",
  storageBucket: "shouldacoulda-development.appspot.com",
  messagingSenderId: "1007126989772",
  appId: "1:1007126989772:web:c5d68ab0adab5ed3736b69",
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
