import { useState } from 'react'
import { Auth } from './Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Browers from './components/Browser'
import { useIdToken } from 'react-firebase-hooks/auth';
import { CurrentUser } from './pages/CurrentUser';

// Initialize Firebase


function App() {

  return (
    <>
      <CurrentUser/>
    </>
  )
}

export default App
