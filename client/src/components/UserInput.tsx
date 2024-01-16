// userInputUtils.tsx
import React, { useState, useEffect } from 'react';
import '../assets/css/authentication.css'; // Import your styles

interface UserInputProps {

    placeholder: string;
    minLength: number;
}

export const useUserInput = ({ placeholder, minLength }: UserInputProps) => {
    const [userInput, setUserInput] = useState('');
    const [isShaking, setIsShaking] = useState(false);
    const [validationUserName, setValidationUserName] = useState(false);
    let inputValidationClass = "";
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserInput(value);

        // Check if the value meets the minimum length requirement
        if (validationUserName && value.length < minLength) {
            // Trigger shaking effect if the value is invalid
            setIsShaking(true);
        } else {
            setIsShaking(false);
        }
        if (validationUserName){
            
        }
    };
    const checkInput = ()=>{
        setValidationUserName(true);
        if (userInput.length<minLength) return false 
        else return true;
    }
    useEffect(() => {
        // Add a delay to allow CSS animation to play before resetting shaking state
        const resetShaking = setTimeout(() => {
            setIsShaking(false);
        }, 2000); // Adjust the delay as needed
        
        return () => {
            clearTimeout(resetShaking);
        };
    }, [isShaking, minLength]);
    
    inputValidationClass = validationUserName&&userInput.trim().length < minLength ? 'invalid-input' : '';

    const userInputComponent = (
        <>
            <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                className={`userInput ${inputValidationClass} ${isShaking ? 'shake-animation' : ''}`}
                placeholder={placeholder}
            />
            {validationUserName && inputValidationClass === "invalid-input" ? <p className='error-text'>{`the length should be less than ${minLength}`}</p> : <></>}
        </>
    );

    return { userInput, userInputComponent, checkInput };
};
