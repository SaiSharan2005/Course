import React, { useState, useEffect } from 'react';
import { isValidEmail } from "../utils/EmailValidation"
export interface IEmailInputProps {

    placeholder:string
}

export function EmailInput({  placeholder}: IEmailInputProps) {
    const [userEmail, setuserEmail] = useState('');
    const [isShaking, setIsShaking] = useState(false);
    const [validationUserName, setValidationUserName] = useState(false);
    let inputValidationClass = "";
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setuserEmail(value);
        const checkEmail = isValidEmail(value);
        if (validationUserName&& !isValidEmail(value)) {
            setIsShaking(true);

        }
        else {
            setIsShaking(false);
        };
    }
        const checkEmail = () => {
            setValidationUserName(true);
            const checkEmail = isValidEmail(userEmail);

            return checkEmail
        }
        useEffect(() => {
            // Add a delay to allow CSS animation to play before resetting shaking state
            const resetShaking = setTimeout(() => {
                setIsShaking(false);
            }, 2000); // Adjust the delay as needed

            return () => {
                clearTimeout(resetShaking);
            };
        }, [isShaking]);

        inputValidationClass = validationUserName && !isValidEmail(userEmail) ? 'invalid-input' : '';

        const userEmailComponent = (
            <>
                <input
                    type="email"
                    value={userEmail}
                    onChange={handleInputChange}
                    className={`userInput ${inputValidationClass} ${isShaking ? 'shake-animation' : ''}`}
                    placeholder={placeholder}
                />
                  </>
        );

        return { userEmail, userEmailComponent, checkEmail };


    }
