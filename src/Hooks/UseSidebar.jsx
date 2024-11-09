import React, { useState } from 'react'

const UseSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
      setIsOpen((prevState) => !prevState);
  };


  return ({isOpen,setIsOpen,toggleSidebar})
}

export default UseSidebar