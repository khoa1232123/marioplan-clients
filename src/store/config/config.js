import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyDTieKDPeeOHh1K3AL7cz18bG7spCqoJCc",
  authDomain: "marioplan-acf7f.firebaseapp.com",
  databaseURL: "https://marioplan-acf7f.firebaseio.com",
  projectId: "marioplan-acf7f",
  storageBucket: "marioplan-acf7f.appspot.com",
  messagingSenderId: "764608279464",
  appId: "1:764608279464:web:35577fecfec7c477fe239d",
  measurementId: "G-6MTC3K69DF"
};

firebase.initializeApp(config);
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;