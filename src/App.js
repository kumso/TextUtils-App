import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
// import About from './components/About'
import TextForm from './components/TextForm'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#18345e'
      document.title = "TextUtils - Dark Mode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = "TextUtils - Light"
    }
  }
  return (
    < >
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* /user -- component 1
            /user/home -- component 2 */}
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm heading="Enter Text" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
