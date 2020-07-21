import React, { useState, useEffect } from 'react';
import api from "../../services/api";
import "./style.css";

export default function Aside({devs, setDevs}) {

  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log(error)
      },
      {
        timeout: 30000,
      }
    )
  }, [])


  async function handleSubmit(e) {
    e.preventDefault();
     const response =  await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });
    const dev = response.data;
    setGithub_username('');
    setTechs('');
    if(!devs.includes(dev)){
      setDevs([...devs, dev])
    }
  }

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuario do github</label>
          <input type="text"
            name="github_username"
            id="github_username"
            value={github_username}
            onChange={(e) => setGithub_username(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input type="text"
            name="techs"
            id="techs"
            value={techs}
            onChange={(e) => setTechs(e.target.value)}
            required
          />
        </div>

        <div className="input-group">

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="text"
              name="longitude"
              id="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="text"
              name="latitude"
              id="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              required
            />
          </div>

        </div>

        <button type="submit"> Salvar </button>
      </form>
    </aside>
  );
}
