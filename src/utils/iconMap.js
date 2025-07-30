import L from 'leaflet';
import bretzel from '../assets/bretzel.png';
import beer from '../assets/beer.png';

// Icônes Leaflet pour les marqueurs
export const leafletIconMap = {
  food: L.icon({
    iconUrl: bretzel,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  drinks: L.icon({
    iconUrl: beer,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  // Ajoute d'autres catégories ici
};

// Images pour l’affichage HTML (sidebar)
export const imageIconMap = {
  food: bretzel,
  drinks: beer,
  // Ajoute d'autres catégories ici
};