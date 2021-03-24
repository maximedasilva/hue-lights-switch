import React from 'react';
import config from './config.json'
const Switch = ({name, id, on = false, switchLight = () => {}}) => {
  return (
    <div>
        <p>{name}</p>
        <button onClick={switchLight.bind(null, !on)} >
          {on ? 'Eteindre' : 'Allumer'}
        </button>
        
      </div>
  )
}
export default Switch