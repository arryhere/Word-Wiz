// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Alert from './components/Alert'
import TextForm from './components/TextForm'
import About from './components/About';
import Theme from './components/Theme';


function App() {

  let lightKey = {
    mode: 'light',
    altMode: 'dark'
  }
  let darkKey = {
    mode: 'dark',
    altMode: 'light'
  }
  if (localStorage.getItem('themeKey') === null) {
    localStorage.setItem('themeKey', JSON.stringify(lightKey))
  }
  if (JSON.parse(localStorage.getItem('themeKey')).mode === 'light') {
    document.body.style.backgroundColor = '#ffffff'
  }
  else {
    document.body.style.backgroundColor = '#424242'
  }

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('themeKey')).mode)
  const [altMode, setAltMode] = useState(JSON.parse(localStorage.getItem('themeKey')).altMode)
  const [alert, setAlert] = useState(null)

  const toggleTheme = () => {
    if (mode === 'light' && altMode === 'dark') {
      setMode('dark')
      setAltMode('light')
      showAlert3000('Dark mode has been set', 'success')
      // document.title = 'Word Wiz - DarkMode'
      localStorage.setItem('themeKey', JSON.stringify(darkKey))

    }
    else {
      setMode('light')
      setAltMode('dark')
      showAlert3000('Light mode has been set', 'success')
      // document.title = 'Word Wiz - LightMode'
      localStorage.setItem('themeKey', JSON.stringify(lightKey))
    }
  }

  const showAlert3000 = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    let themeToggleSwitch = document.getElementById('themeTogggleSwitch')
    themeToggleSwitch.disabled = true
    setTimeout(() => {
      setAlert(null)
      themeToggleSwitch.disabled = false
    }, 3000);
  }
  const showAlert1500 = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <Router>
      <>
        <header>
          <Navbar title="Word Wiz" home="Home" about="About" theme={"Theme"} mode={mode} altMode={altMode} toggleTheme={toggleTheme} themeKey={JSON.parse(localStorage.getItem('themeKey')).mode} />
          <Alert alert={alert} />
        </header>

        {/* <main>
          <section>
            <TextForm heading="Enter the text to analyze" mode={mode} altMode={altMode} showAlert1500={showAlert1500} />
            <Theme />
          </section>
        </main> */}

        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} altMode={altMode} showAlert1500={showAlert1500} />} />
          <Route exact path='/about' element={<About mode={mode} altMode={altMode} />} />
          <Route exact path="/theme" element={<Theme />} />
        </Routes>
      </>
    </Router>

  );

}

export default App;
