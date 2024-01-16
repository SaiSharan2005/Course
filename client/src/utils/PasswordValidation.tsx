import * as React from 'react';

interface ValidationResponse {
    isValid: boolean;
    messages: string[];
}

export const PasswordValidation = (password: string, minLength: number): ValidationResponse => {
    const messages: string[] = [];

    // Minimum length check
    if (password.length < minLength) {
   
        messages.push(`Password should be at least ${minLength} characters long`);
    }

    // Check for at least one capital letter
    const capitalLetterRegex = /[A-Z]/;
    if (!capitalLetterRegex.test(password)) {
        messages.push('Password should contain at least one capital letter');
    }

    // Check for at least one small letter
    const smallLetterRegex = /[a-z]/;
    if (!smallLetterRegex.test(password)) {
        messages.push('Password should contain at least one small letter');
    }

    // Check for at least one special character
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    if (!specialCharacterRegex.test(password)) {
        messages.push('Password should contain at least one special character');
    }

    // Check for at least one number
    const numberRegex = /\d/;
    if (!numberRegex.test(password)) {
        messages.push('Password should contain at least one number');
    }

    const isValid = messages.length === 0;
    return { isValid, messages };
}
