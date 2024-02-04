import React, { useContext } from 'react'
import { Courses } from '../components/Courses'
import homeImage from "../assets/homeCode.jpg"
import { UserContext } from '../context/userContext';
function AuthUserHomePage() {
  const { userId, username, setUser, clearUser } = useContext(UserContext)!;

  return (<>

    <div className='available-courses'>
    <h1 className= "py-3 px-1 font-sans text-lg text-left font-bold"  >Welcome {username} ,</h1>
      <h3 className='font-sans text-lg font-serif font-bold'>Available Courses</h3>
      <Courses />
    </div>

  </>
  )
}

export default AuthUserHomePage