import React, { useContext } from 'react'
import { Courses } from '../components/Courses'
import homeImage from "../assets/homeCode.jpg"
import { UserContext } from '../context/userContext';
function AuthUserHomePage() {
  const { userId, username, setUser, clearUser } = useContext(UserContext)!;

  return (<>

    <h1 style={{ marginLeft: "4vw", marginTop: "2vh" }}>Welcome {username}</h1>
    <div className='available-courses'>
      <h3 >Available Courses</h3>
      <Courses />
    </div>

  </>
  )
}

export default AuthUserHomePage