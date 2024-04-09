import Navbar from "./scenes/Navbar"
import LandingPage from "./scenes/LandingPage"
import Projects from "./scenes/Projects"
import About from "./scenes/About";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"



function App() {
  // use state to check which page user is on 
  const [selectedPage, setSelectedPage] = useState('home')
  // variable to check for screen size for users 
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <div className="app bg-deep-blue">
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      /> 
      <LandingPage setSelectedPage={setSelectedPage}/>
      <About setSelectedPage={setSelectedPage} />
      <Projects />
    </div>
    
  );
}

export default App;
