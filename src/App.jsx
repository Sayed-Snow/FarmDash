import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './components/Dashboard'
import { Button } from '@material-tailwind/react'
import { ComplexNavbar } from './components/Navbar'
import Statistic from './components/Statistic'
import Stats from './containers/Stats'
import Home from './pages/Home'

import {initializeApp} from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import Browers from './components/Browser'

const firebaseConfig = {
  apiKey: "AIzaSyAPWccRkLGqmK56USvlyi4n-_BVjQUOZAQ",
  authDomain: "impactful-shard-378816.firebaseapp.com",
  projectId: "impactful-shard-378816",
  storageBucket: "impactful-shard-378816.appspot.com",
  messagingSenderId: "136127580193",
  appId: "1:136127580193:web:0efe66bfc513918edfbb60",
  measurementId: "G-ENTX8X0YBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

function App() {
  const [count, setCount] = useState(0)
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <>
      <Browers/>
    </>
  )
}

export default App
