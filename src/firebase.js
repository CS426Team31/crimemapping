import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCGzcG7VkEY2sDKbvCDrUdmIYrya0Z9GgQ",
  authDomain: "seniorproj3-bb891.firebaseapp.com",
  databaseURL: "https://seniorproj3-bb891-default-rtdb.firebaseio.com",
  projectId: "seniorproj3-bb891",
  storageBucket: "seniorproj3-bb891.appspot.com",
  messagingSenderId: "269338562487",
  appId: "1:269338562487:web:9912c7b5542ace3b4c2232",
  measurementId: "G-55SCE1Z8JN"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.database();