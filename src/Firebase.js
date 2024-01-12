import {initializeApp} from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPWccRkLGqmK56USvlyi4n-_BVjQUOZAQ",
  authDomain: "impactful-shard-378816.firebaseapp.com",
  projectId: "impactful-shard-378816",
  storageBucket: "impactful-shard-378816.appspot.com",
  messagingSenderId: "136127580193",
  appId: "1:136127580193:web:0efe66bfc513918edfbb60",
  measurementId: "G-ENTX8X0YBM"
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)
export const db = getFirestore(app)