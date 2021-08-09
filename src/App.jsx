import React from 'react';
import { useState } from 'react';
import './App.scss';

const themes = ['theme-alpha', 'theme-beta', 'theme-gamma']

function App() {
  const [theme, setTheme] = useState(0)

  const switchTheme = () => {
    const elements = document.querySelectorAll('.App *') 
    const newTheme = (theme + 1) % themes.length
    for (const el of elements) {
      el.classList.remove(themes[theme]);
      el.classList.add(themes[newTheme]);
    }
    
    // since transition-duration in scss set to 1s
    setTimeout(() => setTheme(newTheme), 1000)
  }

  const handleClick = e => {
    switchTheme()
  }

  return (
    <div className="App">
      <div className={`nav`}><span className={`nav-theme`} onClick={e => handleClick(e)}>Switch theme</span></div>
      <div className={'middle'}>
        <p> You can switch between three themes</p>
        <p> "{themes[theme].charAt(0).toUpperCase() + themes[theme].slice(1)}" has been applied</p>
      </div>
      <div className={'bottom'}>Bottom section</div>
    </div>
  );
}

export default App;
