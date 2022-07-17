import React, { useState } from 'react'

export default function Theme() {

  const [themeStyle, setThemeStyle] = useState({
    backgroundColor: 'white',
    color: 'rgb(33,37,41)'
  })
  const [themeBtnText, setThemeBtnText] = useState('Enable Dark Mode')
  const [themeBtnClass, setthemeBtnClass] = useState('btn btn-dark')

  const toggleTheme = () => {
    if (themeStyle.backgroundColor === 'white') {
      setThemeStyle({
        backgroundColor: 'rgb(33,37,41)',
        color: 'white'
      })
      setThemeBtnText('Enable Light Mode')
      setthemeBtnClass('btn btn-light')
    }
    else {
      setThemeStyle({
        backgroundColor: 'white',
        color: 'rgb(33,37,41)',
      })
      setThemeBtnText('Enable Dark Mode')
      setthemeBtnClass('btn btn-dark')
    }
  }
  return (
    <>
      <div className='container my-3 p-3 border border-dark rounded-3' style={themeStyle}>
        <div>
          <h1>demo heading</h1>
          <p>demo text</p>
        </div>
        <button type='button' className={themeBtnClass} onClick={toggleTheme}>{themeBtnText}</button>
      </div>
    </>
  )
}
