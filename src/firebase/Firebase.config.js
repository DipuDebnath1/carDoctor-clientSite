// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
// apiKey:import.meta.env.VITE_apiKey,
// authDomain:import.meta.env.VITE_authDomain,
// projectId:import.meta.env.VITE_projectId,
// storageBucket:import.meta.env.VITE_storageBucket,
// messagingSenderId:import.meta.env.VITE_messagingSenderId,
// appId:import.meta.env.VITE_appId
apiKey: "AIzaSyCLsrLj4zNIkIpMgxVlWDKkTiA2rQi9aUg",
  authDomain: "doctored-cars.firebaseapp.com",
  projectId: "doctored-cars",
  storageBucket: "doctored-cars.appspot.com",
  messagingSenderId: "354091342826",
  appId: "1:354091342826:web:152a57862b32d0c422f093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

