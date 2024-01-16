// userPasswordUtils.tsx
import React, { useState, useEffect } from 'react';
import '../assets/css/authentication.css'; // Import your styles
// import password from "../assets/password.png"
import { PasswordValidation } from '../utils/PasswordValidation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface userPasswordProps {
    placeholder: string;
    minLength: number;
}
export const usePasswordInput = ({ placeholder, minLength }: userPasswordProps) => {
    const [userPassword, setuserPassword] = useState<string>('');
    const [isShaking, setIsShaking] = useState<boolean>(false);
    const [validationPassword, setValidationPassword] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [ErrorMessages, setErrorMessages] = useState<string[]>([])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setuserPassword(value);
        // Check if the value meets the minimum length requirement
        if (validationPassword && value.length < minLength) {
            // Trigger shaking effect if the value is invalid
            setIsShaking(true);
        } else {
            setIsShaking(false);

        }
        if (validationPassword) {
            const { isValid, messages } = PasswordValidation(value, minLength);
            setErrorMessages(messages)
            console.log(ErrorMessages)

        }
    };


    const passwordEyeClicked = () => {
        setShowPassword(!showPassword);
    }
    const checkPassword = (): boolean => {
        setValidationPassword(true);
        const { isValid, messages } = PasswordValidation(userPassword, minLength);
        { isValid ? <></> : setErrorMessages(messages) }
        return isValid
    }



    useEffect(() => {
        // Add a delay to allow CSS animation to play before resetting shaking state
        const resetShaking = setTimeout(() => {
            setIsShaking(false); // Reset inputChanged after the shaking effect
        }, 2000); // Adjust the delay as needed

        return () => {
            clearTimeout(resetShaking);
        };
    }, [isShaking, minLength]);


    const inputValidationClass = validationPassword && userPassword.trim().length < minLength ? 'invalid-input' : '';


    const userPasswordComponent = (
        <>
            <div className={` password-input ${inputValidationClass} ${isShaking ? 'shake-animation' : ''}`}>
                <input
                    type={showPassword ? "text" : "password"}
                    value={userPassword}
                    onChange={handleInputChange}
                    className={`userPassword`}
                    placeholder={placeholder}
                />
                <div className="eye-icon" onClick={passwordEyeClicked}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}</div>
            </div>
            <ul>
                {ErrorMessages.map((message, index) => (
                    <li key={index} className="error-text">{message}</li>

                ))}
            </ul>
        </>
    );

    return { userPassword, userPasswordComponent, checkPassword, setIsShaking };
};
