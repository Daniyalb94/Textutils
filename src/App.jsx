import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const alertFunction = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      alertFunction("Dark mode has been enabled", "success")
    } else {
      setmode('light');
      alertFunction("light mode has been enabled", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <About /> */}
        {/* <TextForm heading="Enter your text below" alertFunction={alertFunction} /> */}

        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextForm heading="Enter your text below" alertFunction={alertFunction} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
