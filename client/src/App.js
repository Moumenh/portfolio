import React from 'react'
import Header from './Components/Header/Header'
// import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

import './App.css';



const App = () => {
  

  return (
    <div className="App">
      <Header/>
      {/* <Intro/> */}
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
