import firebase from "firebase/app"
import "firebase/auth"

 const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyCHMB8pCzri7dp-sIuWvKgq5nmybkZIkJA",
  authDomain: "clone-549df.firebaseapp.com",
  projectId: "clone-549df",
  storageBucket: "clone-549df.appspot.com",
  messagingSenderId: "768867902843",
  appId: "1:768867902843:web:cd4768b5915bc3def189de"
  
})

 export const auth = app.auth()
 export default app 

// import firebase from "firebase"
// var firebaseConfig = {
//     apiKey: "AIzaSyCHMB8pCzri7dp-sIuWvKgq5nmybkZIkJA",
//     authDomain: "clone-549df.firebaseapp.com",
//     projectId: "clone-549df",
//     storageBucket: "clone-549df.appspot.com",
//     messagingSenderId: "768867902843",
//     appId: "1:768867902843:web:cd4768b5915bc3def189de"
//   };
 
//   export const fire=firebase.initializeApp(firebaseConfig);