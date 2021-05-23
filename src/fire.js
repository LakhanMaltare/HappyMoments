// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
var app = {
    apiKey: "AIzaSyD59n6S-BlXbpFAQbFZBfrKhHpS67fQEas",
    authDomain: "happymoments-8cc19.firebaseapp.com",
    projectId: "happymoments-8cc19",
    storageBucket: "happymoments-8cc19.appspot.com",
    messagingSenderId: "101443810409",
    appId: "1:101443810409:web:254fe029c3e3f87ba9def8"
  };
  const fire=firebase.initializeApp(app);
  // export const auth=app.auth()
  export default fire;