import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeButton() {
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    const handleTheme = () => {
      setDarkMode(!darkMode)
    }
  return (
    <button className={!darkMode ? "theme dark" : "theme"} onClick={handleTheme}>{!darkMode ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}</button>
  )
}

export default ThemeButton