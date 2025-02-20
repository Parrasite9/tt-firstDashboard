import React, { useState } from 'react'

function UserForm({ onAddUser }) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // PREVENT PAGE RELOAD ON FORM SUBMIT

        if (!name || !age || !city) {
            alert('Please fill out all fields.');
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            age: parseInt(age),
            city,
        }

        onAddUser(newUser); // PASS THE NEW USER TO THE PARENT COMPONENT

        // RESET FORM FIELDS AFTER SUBMISSION
        setName('');
        setAge('')
        setCity('')
    }


  return (
    <form
        onSubmit={handleSubmit}
        className='bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mb-6'
    >
      <h1>Add a New User</h1>
      <input 
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='w-full p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400' 
    />
    <input 
        type="number" 
        placeholder='Age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className='w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
    />
    <input 
        type="text" 
        placeholder='City'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
    />
    <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 font-semibold'
    >
        Add User
    </button>
    </form>
  )
}

export default UserForm
