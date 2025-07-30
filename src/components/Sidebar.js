import React from 'react';
import bretzel from '../assets/bretzel.png';
import beer from '../assets/beer.png';
import '../styles.css';

const iconMap = {
  food: bretzel,
  drinks: beer,
  // Ajoute ici d'autres catégories si besoin
};

function Sidebar({ markers, categories, selectedCategories, setSelectedCategories }) {
  // Regroupe les marqueurs par catégorie
  const grouped = markers.reduce((acc, marker) => {
    acc[marker.type] = acc[marker.type] || [];
    acc[marker.type].push(marker);
    return acc;
  }, {});

  // Gère la sélection/désélection d'une catégorie
  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Catégories</h2>
      </div>
      <ul className="sidebar-category-list" style={{ listStyle: 'none', paddingLeft: 12}}>
        {categories.map(type => (
          <li key={type} className="sidebar-category-selectable">
            <label className="sidebar-category-label">
              <span className="sidebar-checkbox">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(type)}
                  onChange={() => toggleCategory(type)}
                />
                <span className="custom-checkbox" />
              </span>
              <img src={iconMap[type]} alt={type} className="sidebar-category-icon" />
              <span>{type}</span>
            </label>
            <ul className="sidebar-marker-list" style={{ listStyle: 'none', paddingLeft: 12 }}>
              {grouped[type]?.map((marker, idx) => (
                <li key={idx} className="sidebar-marker-item">
                  {marker.popup}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;