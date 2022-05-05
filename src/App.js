import image from './assets/tommi.jpg';
import './App.css';
import Text from './Text.js';
import { useState } from 'react';


const DATA = [
  {
    job: 'Bónus',
    years: '2005 - 2013',
    description: 'Started working in the store, filling the shelves and ordering frozen goods. Worked my way up to an assistant manager in the Selfoss store, later up to store manager in the Hveragerði store.'
  },
  {
    job: 'Ölvisholt',
    years: '2013-2014',
    description: 'I assisted the brew master in everything related to the brewing process. as well as helping with cleaning the equipment, bottling the beer and preparing orders for transportation.'
  },
  {
    job: 'Tölvulistinn',
    years: '2014 - 2021',
    description: 'Started in sales and technical advising for both computer equipment and electronics. Later became the computer technician where I repaired computers along with building computers for customers. Also kept the computer and network equipment in working order for the store.'
  }

]

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-container">
          <div className="Container-text">
            <h1>Tómas Héðinn Gunnarsson</h1>
            <p>Father, sports addict, music lover</p>
          </div>
          <img src={image} className="App-image" alt="dp-pic"/>
        </div>
        <div className='Horizontal-line'></div>
        <div class="Job-container">
          <Text personObject={DATA[0]}/>
          <Text personObject={DATA[1]}/>
          <Text personObject={DATA[2]}/>
        </div>
      </header>
    </div>
  );
}

export default App;
