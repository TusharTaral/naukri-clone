import firebase from "firebase/app"
import "firebase/auth"

 const app = firebase.initializeApp({
 
  apiKey: "AIzaSyCHMB8pCzri7dp-sIuWvKgq5nmybkZIkJA",
  authDomain: "clone-549df.firebaseapp.com",
  projectId: "clone-549df",
  storageBucket: "clone-549df.appspot.com",
  messagingSenderId: "768867902843",
  appId: "1:768867902843:web:cd4768b5915bc3def189de"
  
})

 export const auth = app.auth()
 export default app 

