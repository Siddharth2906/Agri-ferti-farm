import './App.css'


import Content1 from './Components/Content1';

import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Content4 from './Components/Content4';
import Content5 from './Components/Content5';
import Content6 from './Components/Content6';
import Content7 from './Components/Content7';
import Footer from './Components/Footer';
import Rights from './Components/Rights';
import { useContext, useRef, useState } from 'react';


import Header from './Components/Header';
import MyContext from './Context/MyContext';
import Content0 from './Components/Content0';
import Sidebar from './Components/Sidebar';




export default function App() {
const Side=useContext(MyContext);


  const targetSectionRef = useRef(null);

  // Function to scroll to the section in the ChildComponent
  const scrollToChildSection = () => {
    // console.log("good");
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
     
      <Header scroll={scrollToChildSection}/>
      {Side.isOpen ? <Sidebar scroll={scrollToChildSection}/> : ""}
      <Content0/>
     <Content1/>
     <Content2/>
     <Content3/>
     <Content4/>
     <Content5/>
    <Content6/>
     <Content7/>
      <Footer/>
      <Rights/>

    </>
  );
}
