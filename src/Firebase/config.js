import firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyACiZxToJFS2ft_DLWUX3Hnalvo4SL4ICA",
    authDomain: "olxx-1c978.firebaseapp.com",
    projectId: "olxx-1c978",
    storageBucket: "olxx-1c978.appspot.com",
    messagingSenderId: "47827548044",
    appId: "1:47827548044:web:3a515d4126529a498648a9"
  };
export default  firebase.initializeApp(firebaseConfig);