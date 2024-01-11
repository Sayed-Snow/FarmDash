import React, { useState } from
 
'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your register logic here, using name, email and password state
    console.log('Register:', name, email, password);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <form className="px-4 py-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label for="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label for="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-6">
              <label for="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;