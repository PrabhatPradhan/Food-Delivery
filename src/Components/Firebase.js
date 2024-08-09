import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDc1maEzBJGatHJAYcGtY4yMLLSBvhxDds",
  authDomain: "foodcart-c49f3.firebaseapp.com",
  projectId: "foodcart-c49f3",
  storageBucket: "foodcart-c49f3.appspot.com",
  messagingSenderId: "90313814240",
  appId: "1:90313814240:web:748c84737ad0020d166085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth object
export const auth = getAuth(app);
export { onAuthStateChanged };
export default app;
