import React, { createContext, useState } from 'react';

// Create a context with a default value
const MyContext = createContext({});

export const MyContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
      setIsOpen((prevState) => !prevState);
  };

    return (
      <MyContext.Provider value={{ isOpen,setIsOpen,toggleSidebar }}>
        {children}
      </MyContext.Provider>
    );
  };
  
export default MyContext