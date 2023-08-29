import React from 'react';
import ReactDom from 'react-dom';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer> This project was coded by Precious Ohasonu and is {''}
        <a href='https://github.com/Preshyo/weather-react' target="_blank" rel="noopener noreferrer">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
