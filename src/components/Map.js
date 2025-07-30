// frontend/src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const foodIcon = L.icon({
  iconUrl: require('../assets/bretzel.png'),
  iconSize:     [38, 38],
  iconAnchor:   [19, 19], // Center the icon (half of iconSize) 
  popupAnchor:  [0, -19] // Popup appears above the icon
});

const drinksIcon = L.icon({
  iconUrl: require('../assets/beer.png'),
  iconSize:     [38, 38],
  iconAnchor:   [19, 19], // Center the icon (half of iconSize) 
  popupAnchor:  [0, -19] // Popup appears above the icon
});

// Mapping des types vers les icônes
const iconMap = {
  food: foodIcon,
  drinks: drinksIcon,
  // Ajoute ici d'autres catégories si besoin
};

const Map = ({ markers = [] }) => {
  // Fallback si aucun marqueur n'est passé
  const defaultPosition = [48.5734, 7.7521]; // Coordinates for Strasbourg

  return (
    <MapContainer
      center={markers[0]?.position}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, idx) => (
        <Marker 
          key={idx} 
          position={marker.position} 
          icon={iconMap[marker.type]}
          title={marker.popup}
        >
          <Popup>
            {marker.popup || `Marqueur ${idx + 1}`}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;