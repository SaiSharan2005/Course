// const isValidEmail = (email) => {
//   // Regular expression for a basic email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // Test the provided email against the regex
//   return emailRegex.test(email);
// };

// // Example usage
// const email1 = "test@example.com";
// const email2 = "invalid-email";

// console.log(`Is "${email1}" a valid email? ${isValidEmail(email1)}`);
// console.log(`Is "${email2}" a valid email? ${isValidEmail(email2)}`);


// import * as React from 'react';



export function isValidEmail (email:string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the provided email against the regex
  return emailRegex.test(email);

}
