import React, {useEffect, useState} from 'react'
import { Ghost as GhostKawaii } from 'react-kawaii';
import './ghost.css'

function GhostContainer({ darkMode = false }) {
  // Valores cuando es de día y el fantasma aparece muerto x.x
  const dayValue = {
    color: 'white',
    mood: 'ko',
    size: 200,
  };
  // Valores cuando es de noche y el fantasma aparece feliz :D
  const nightValue = {
    color: 'gray',
    mood: 'blissful',
    size: 400
  }

  const [ghost, setGhost] = useState(dayValue);

  useEffect(() => {
    const mode = darkMode ? nightValue : dayValue;
    setGhost(mode);
  }, [darkMode]);


  return (
    <>
      <div id="ghost">
        <GhostKawaii size={200} mood="blissful" {...ghost} />
      </div>
      <div id="shadow"></div>
    </>
  )
}

export default GhostContainer;
