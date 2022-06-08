import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp-2Tnt11Hvuvxr0-Xwa6DGmPWPVta4oE",
    authDomain: "my-hertech.firebaseapp.com",
    projectId: "my-hertech",
    storageBucket: "my-hertech.appspot.com",
    messagingSenderId: "977889467718",
    appId: "1:977889467718:web:408b92c122790459c21947",
    measurementId: "G-245NGS9N3H"
  };
// Initialize Firebase
  const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };