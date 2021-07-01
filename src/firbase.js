import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBM3GOcovpO3BQW-Ot2O5XphfFcc4t0omE",
  authDomain: "my-awosome-99392.firebaseapp.com",
  projectId: "my-awosome-99392",
  storageBucket: "my-awosome-99392.appspot.com",
  messagingSenderId: "127938441609",
  appId: "1:127938441609:web:84c860566a6c8576c57158",
  measurementId: "G-LVPCJ4NZ6V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
