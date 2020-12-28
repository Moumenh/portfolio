import React from 'react'
import Header from './Components/Header/Header'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      {/* <Intro/> */}
      <About/>
    </div>
  );
}

export default App;
