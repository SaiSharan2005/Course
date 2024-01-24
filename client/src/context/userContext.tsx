// UserContext.ts

import React, { createContext, useState, ReactNode, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
interface UserContextType {
  userId: number | null;
  username: string;
  setUser: (id: number, name: string) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [username, setUsername] = useState<string>('');

  const setUser = (id: number, name: string) => {
    setUserId(id);
    setUsername(name); 
  };

  const clearUser = () => {
    setUserId(null);
    setUsername('');
  };

  
  const fetchData = async () => {
    try {
        const authToken =  await localStorage.getItem('authToken'); 

        // if(authToken){
        // const decodedToken: any = jwtDecode(authToken); 
        // console.log('Decoded Token:', decodedToken);}
        // Make an API call to fetch initial user data
        const response = await fetch('http://localhost:3001/api/getUserIdWithAuthToken', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ authToken: authToken?.slice(1,-1)
        })
        }); 
        console.log("Fetching data...");

      if (response.ok) {
        const data = await response.json();
        
        // Log the entire response for debugging
        
        // Replace hardcoded values with actual data
        const userData = await fetch('http://localhost:3001/api/getUserById',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({userId:data.userId})
        })
        const data2 = await userData.json();
        console.log("sata2",data2);
        // Initialize the user context with fetched data
   
        setUser(data.userId, data2.username);
      } else {
        console.error('Error fetching user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    
    fetchData();
  }, []); // Run only once during mount


  return (
    <UserContext.Provider value={{ userId, username, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

