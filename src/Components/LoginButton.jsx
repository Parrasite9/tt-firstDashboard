import React, { useState } from 'react'

function LoginButton() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState); //TOGGLE THE LOGIN STATE
  }

  return (
    <div className='flex flex-col items-center mt-6'>
      {isLoggedIn ? (
        <>
            <p className='text-green-600 font-semibold text-lg mb-2'>Welcome Back!</p>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={toggleLogin}>LOG OUT</button>
        </>
      ) : (
        <>
            <p className='text-blue-600 font-semibold text-lg mb-2'>Please Log in</p>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={toggleLogin}>LOG IN</button>
        </>
      )}
    </div>
  )
}

export default LoginButton
