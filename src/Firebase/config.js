import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN_StSOVPKEzMcotP1p36XITADxatGTPA",
  authDomain: "fir-6d5cf.firebaseapp.com",
  projectId: "fir-6d5cf",
  storageBucket: "fir-6d5cf.appspot.com",
  messagingSenderId: "801855333692",
  appId: "1:801855333692:web:163a88a923efd880672a39",
  measurementId: "G-C5L1T4LBX5"
};
export default  firebase.initializeApp(firebaseConfig);