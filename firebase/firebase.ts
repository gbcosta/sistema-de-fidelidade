import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const env = import.meta.env;
const firebaseConfig = {
  apiKey: env.VITE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  databaseURL: env.VITE_DATABSE_URL,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MEASUREMENT_ID,
  appId: env.VITE_APP_ID,
  measurementId: env.VITE_MESSAGIN_SENDER_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addAgencie = async (form: {
  name: string;
  email: string;
  number: string;
}) => {
  const number = form.number.replace(/[^\d]/g, "");
  if (number.length != 11 && number.length != 10) {
    return "numberError";
  }
  try {
    await addDoc(collection(db, "agencies"), form);
  } catch (e) {
    return e;
  }
};
