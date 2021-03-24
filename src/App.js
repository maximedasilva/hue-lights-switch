import './App.css';
import Switch from './Switch';
import { useEffect, useState } from 'react';
import config from './config.json'
function App() {
  const [lights, setlights] = useState();
  useEffect(() => {
    fetch(`http://${config.url}/api/${config.username}/lights`,{
      method: 'GET',
      }
    ).then((data)=> data.json()).then((data) =>  {
      const retrievedLights = []
      Object.keys(data).map((key, index) => {
        retrievedLights.push({...data[key], id:key});
      });
      setlights(retrievedLights)

    });
  }, []);

  const switchLight = (light, state) => {
    console.log(state, light)
      fetch(`http://${config.url}/api/${config.username}/lights/${light.id}/state`,{
        method: 'PUT',
        body: `{"on": ${state}}`}
      ).then((data)=> data.json());
      light.state.on = !state;
      const test = Object.assign([], lights);
       test.find((l) => l.id === light.id).state.on = state
      setlights(test)
  }
  return (
    <div className="App">
    {lights && lights.map((light, id) => (
      <Switch name={light.name} id={light.id} on={light.state.on} switchLight={switchLight.bind(null, light)}></Switch>
    ))}
     
    </div>
  );
}

export default App;
