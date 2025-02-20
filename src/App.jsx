import React, { useState } from 'react'
import LoginButton from './Components/LoginButton'
import UserForm from './Components/UserForm'
import UserList from './Components/UserList'

function App() {

  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser])
  }

  return (
    <div className='max-w-2xl mx-auto p-6 bg-gray-300 min-h-screen'>
      <h1 className='text-3xl font-bold text-center mb-4'>DASHBOARD</h1>
      <LoginButton />
      <UserForm onAddUser={addUser} />
      <UserList users={users} />
    </div>
  )
}

export default App
