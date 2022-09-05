import { getStorage } from "firebase/storage"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyALkuIVYpWZteKt0TciXPN3O11QR3Y106o",
  authDomain: "swahili-spot.firebaseapp.com",
  projectId: "swahili-spot",
  storageBucket: "swahili-spot.appspot.com",
  messagingSenderId: "319551822911",
  appId: "1:319551822911:web:9740ba40534706e452ac8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

