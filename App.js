import './App.css';
import React from 'react'
import User from './User'
function App() {
  const users = [
    {
      name: 'Raul', email: 'raul@test.com', contact: '9091'
    },
    {
      name: 'Rajan', email: 'rajan@test.com', contact: '9091'
    },
    {
      name: 'Rohan', email: 'rohan@test.com', contact: '9091'
    },
    {
      name: 'Ranjeet', email: 'ranjeet@test.com', contact: '9091'
    },

  ]
  return (
    <div className='App'>
      <h1>Reusing component with List</h1>

      {
        users.map((item, i) =>
          <User data={item} />
        )
      }
    </div>

  );
}

export default App;