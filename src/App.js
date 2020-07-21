import React,{useState,useEffect} from 'react';
import './App.css';
import './global.css';
import api from "./services/api";
import Aside from "./components/Aside";
import Main from './components/Main';



function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [])
  return (
    <div id="app">
      <Aside devs={devs} setDevs={setDevs}/>
      <Main devs={devs} setDevs={setDevs} />
    </div>
  );
}

export default App;
