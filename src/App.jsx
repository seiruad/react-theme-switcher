import React from 'react';
import { useState } from 'react';
import './App.scss';

const themes = ['theme-alpha',  'theme-delta','theme-gamma', 'theme-beta']

function App() {
  const [theme, setTheme] = useState(0)
  const [switching, setSwitching] = useState(false)

  const switchTheme = () => {
    setSwitching(true)
    const elements = document.querySelectorAll('.App *') 
    const newTheme = (theme + 1) % themes.length
    
    // since transition-duration in scss set to 0.8s
    setTimeout(() => {
      for (const el of elements) {
        el.classList.remove(themes[theme]);
        el.classList.add(themes[newTheme]);
      }
      setSwitching(false)
      setTheme(newTheme)
    }, 800)
    
  }

  const handleClick = e => {
    switchTheme()
  }

  return (
    <div className={`App ${switching && 'switching'}`}>
      <div className={`nav`}><span className={`nav-theme`} onClick={e => handleClick(e)}>Switch theme</span></div>
      <div className={'middle'}>
        <p> You can switch between multiple themes</p>
        <p> "{themes[theme].charAt(0).toUpperCase() + themes[theme].slice(1)}" has been applied</p>
      </div>
      <div className={'bottom'}>Bottom section</div>
    </div>
  );
}

export default App;
