import React from 'react';
import './App.css';
// import './Images'
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import img4 from './Images/4.jpg';
import img5 from './Images/5.jpg';
import img6 from './Images/6.jpg';
import img7 from './Images/7.jpg';
import img8 from './Images/8.jpg';
import img9 from './Images/9.jpg';
import img10 from './Images/10.jpg';
import img11 from './Images/11.jpg';
import img12 from './Images/12.jpg';
import ScaryCards from './Components/ScaryCards.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScaryCards src={img1} />

      </header>
    </div>
  );
}

export default App;
