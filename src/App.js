import React, { useState, useEffect } from 'react';
import './globals.css';
import Header from './header.js'
import TopCardList from './top-card-list.js'
import Overview from './overview.js'
import Switch from './switch'
import Ghost from "./Ghost";

function App() {
  const [showGhost] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <main className={mainClass}>
      <Header >
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      {!showGhost && (
        <>
          <TopCardList />
          <Overview />
        </>
      )}
      {showGhost && <Ghost darkMode={darkMode}/>}
    </main>
  )
}
export default App;
