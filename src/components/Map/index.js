import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css"; // sass
import "react-leaflet-markercluster/dist/styles.min.css";
import L from "leaflet";
import blueMarker from "../../assets/venue_location_icon.svg";

import InfoModal from "../../components/InfoModal";

const LocationIcon = new L.Icon({
  iconUrl: blueMarker,
  iconRetinaUrl: blueMarker,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export default function Map({ markers }) {
  const [clickedMarker, setClickedMarker] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <InfoModal
        trator={clickedMarker}
        allMarkers={markers}
        visible={visible}
        closeModal={() => setVisible(false)}
      />

      <MapContainer
        style={{ width: "100vw", height: "100vh" }}
        className="markercluster-map"
        center={[-12.9545732, -42.4450489]}
        zoom={6}
        maxZoom={18}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {markers.map(({ latitude, longitude, tombo }) => (
            <Marker
              key={tombo}
              icon={LocationIcon}
              position={[Number(latitude), Number(longitude)]}
              eventHandlers={{
                click: (e) => {
                  setClickedMarker(tombo);
                  setVisible(true);
                },
              }}
            />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
