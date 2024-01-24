import * as React from 'react';
import { UserContext } from '../context/userContext';
import "../assets/css/user.css"
import { useParams } from 'react-router-dom';
export interface IProfilePageProps {
}
interface IProfileData {
  userId: number;
  username: string;
  bio: string;
  image: string;
  perDay: number;
  streak: number;
}
export default function ProfilePage (props: IProfilePageProps) {
  const {userIdNumber} =useParams()
    const [profileData,setProfileData] = React.useState<IProfileData>({
      userId: 1,
      username: "",
      bio: "",
      image: "",
      perDay: 0,
      streak: 0
    }) 
    const { userId, username, setUser, clearUser } = React.useContext(UserContext)!;
    React.useEffect(()=>{
         const fetchData = async()=>{
            const response = await fetch("http://localhost:3001/api/getProfile/",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({userId:userId})
            })
            setProfileData(await response.json())
         }
         fetchData();
    },[userIdNumber])
  return (
    <div>
      <header>
    <h1>User Profile</h1>
  </header>

  <div className="profile-container">
    <div className="profile-image">
      <img src={profileData.image||"https://placekitten.com/150/150"} alt="Profile Picture"/>
    </div>

    <div className="profile-info">
      <h2>{profileData.username}</h2>
      <p>Bio: {profileData.bio}m</p>
      <p>Streak: {profileData.streak}</p>
      <p>Kept a goal to work for {profileData.perDay} min </p>
      {/* <p>Joined on: January 1, 2022</p> */}
      {/* <a href="#" className="button">Edit Profile</a> */}
    </div>
  </div>
      
    </div>
  );
}
