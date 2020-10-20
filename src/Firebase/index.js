import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDcYwl7NJ3dzpVy6pKxPKNhq6KZpSPjtEs",
    authDomain: "picnic-8d515.firebaseapp.com",
    databaseURL: "https://picnic-8d515.firebaseio.com",
    projectId: "picnic-8d515",
    storageBucket: "picnic-8d515.appspot.com",
    messagingSenderId: "1072845351582",
    appId: "1:1072845351582:web:fb1b44980baa400341298f",
    measurementId: "G-7X3GCB0D4Z"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
  db.settings({timestampsInSnapshots: true})
  export {
      storage,
      db,
      firebase as default
  }