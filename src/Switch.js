import React from 'react';
import config from './config.json'
const Switch = ({name, id}) => {
  const switchLight = (on) => {
    fetch(`http://${config.url}/api/${config.username}/lights/${id}/state`,{
      method: 'PUT',
      body: `{"on": ${on}}`}
    ).then((data)=> data.json()).then((data) => console.log(data))
    console.log(on);
  }
  return (
    <div>
        <p>{name}</p>
        <button onClick={switchLight.bind(null, true)}>
          Allumer
        </button>
        <button onClick={switchLight.bind(null, false)}>
          Eteindre
        </button>
      </div>
  )
}
export default Switch