import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import 'leaflet-draw';

// Fix for default icon issue with React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const Map = () => {
  const position = [59.292, 18.716]; // Coordinates for Sollenkroka, Värmdö

  useEffect(() => {
    const map = L.map('map').setView(position, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      },
      draw: {
        polygon: false,
        circle: false,
        rectangle: false,
        circlemarker: false,
        marker: false
      }
    });
    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function (event) {
      const layer = event.layer;
      drawnItems.addLayer(layer);

      if (layer instanceof L.Polyline) {
        const latlngs = layer.getLatLngs();
        const distance = L.GeometryUtil.length(latlngs);
        alert(`Total distance: ${distance.toFixed(2)} meters`);
      }
    });
  }, []);

  return (
    <Box height="500px" width="100%" id="map">
    </Box>
  );
};

export default Map;