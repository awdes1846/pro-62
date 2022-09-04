 import firebase from "firebase";

   
const firebaseConfig = {
  apiKey: "AIzaSyAfLqhnESes93fxHGi9IHlAB9zyEWa5GC8",
  authDomain: "pro-60-ca10d.firebaseapp.com",
  databaseURL: "https://pro-60-ca10d-default-rtdb.firebaseio.com",
  projectId: "pro-60-ca10d",
  storageBucket: "pro-60-ca10d.appspot.com",
  messagingSenderId: "1098500819759",
  appId: "1:1098500819759:web:1814e70d8ee95b6e5aefda"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase.database()
 

  