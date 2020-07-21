import React from 'react';
import "./style.css";

export default function Main({devs}) {


  return (
    <main>
      <ul>
        {
          devs.map(dev => (
            <li key={dev._id} className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`} target=" _blank">Acessar perfil no github</a>
            </li>
          ))
        }

      </ul>
    </main>
  );
}
