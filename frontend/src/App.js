// frontend/src/App.js
import React, { useState } from 'react';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import './styles.css';

const markers = [ // in Decimal degree (WGS84) 
  { position: [48.5734, 7.7521], popup: "Strasbourg" , type: "food" },
  { position: [48.586941, 7.759438], popup: "Strasbourg-bis" , type: "drinks" },
  // ...autres positions
];

function App() {
  // Liste des catégories uniques
  const categories = [...new Set(markers.map(m => m.type))];
  // Par défaut, toutes sélectionnées
  const [selectedCategories, setSelectedCategories] = useState(categories);

  // Marqueurs filtrés selon la sélection
  const filteredMarkers = markers.filter(m => selectedCategories.includes(m.type));


  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        markers={markers}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <div style={{ flex: 1 }}>
        <Map markers={filteredMarkers} />
      </div>
    </div>
  );
}


export default App;
