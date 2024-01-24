import React, { ChangeEvent, useState, useContext } from 'react';
import { useUserInput } from './UserInput';
import { UserContext } from '../context/userContext';
import "../assets/css/user.css"
import { useNavigate } from 'react-router-dom';
export interface ICreateProfileProps {

}

export function CreateProfile(props: ICreateProfileProps) {
    const { userId, username, setUser, clearUser } = useContext(UserContext)!;
    const navigation = useNavigate()
    // userInput, userInputComponent, checkInput
    const [image, setImage] = useState<string>("");
    const [profileData, setProfileData] = useState({
        userId:userId,
        username: username,
        perDay: '',
        bio: '',
        image: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(profileData)
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();
        const response =  await fetch("http://localhost:3001/api/addProfile",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({...profileData,image:image,userId:userId,username:username})
        })
        if (response.ok) {
            const data = await response.json();
            // handle the data as needed
            console.log(data);
            navigation("/home");
            
        } else {
            console.error('Failed to add profile:', response.statusText);
        }

        // {...profileData,image:image,userId:userId}
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // Set the base64-encoded image data to state
                setImage(reader.result as string);
            };

            // Read the image file as a data URL
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>
            {userId}
            <div className="create-profile-container">
                <h2>Create Your Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bio">Bio:</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={profileData.bio}
                            onChange={handleChange}
                            rows={4}
                            required
                        />
                    </div>

                    <div className="form-group">' <label htmlFor="avatar">Your Profile</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="perDayTime">How Many Hours Do You want To work Per Day:</label>
                        <input
                            type="number"
                            id="perDay"
                            name="perDay"
                            value={profileData.perDay}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" >Create Profile</button>
                </form>
            </div>
        </div>
    );
}
