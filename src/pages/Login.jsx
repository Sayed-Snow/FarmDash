import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Auth } from '../Firebase';


const Login = () => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('password');

  const onLogin = () => {
    signInWithEmailAndPassword(Auth, email, password);
    
  };


  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <div className="px-4 py-8">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="current-password" id="current-password" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700" onClick={onLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;