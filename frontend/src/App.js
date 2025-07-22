// frontend/src/App.js
import React from 'react';
import Map from './components/Map';
import './styles.css';

const markers = [ // in Decimal degree (WGS84) 
  { position: [48.5734, 7.7521], popup: "Strasbourg" , type: "food" },
  { position: [48.586941, 7.759438], popup: "Strasbourg-bis" , type: "drinks" },
  // ...autres positions
];

function App() {
  return (
    <div>
      <Map markers={markers} />
    </div>
  );
}


export default App;
