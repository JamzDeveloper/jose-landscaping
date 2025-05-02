"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Solución para el problema de iconos en Leaflet con Next.js
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Definición de tipos para las ubicaciones
type Location = {
  id: number;
  name: string;
  position: [number, number];
  description: string;
};

export default function MapComponent() {
  // Estado para almacenar las ubicaciones
  // const [locations, setLocations] = useState<Location[]>([
  //   {
  //     id: 1,
  //     name: "Madrid",
  //     position: [36.158712, -115.151664],
  //     description: "Las Vegas",
  //   },
  //   // {
  //   //   id: 2,
  //   //   name: "Barcelona",
  //   //   position: [41.3851, 2.1734],
  //   //   description: "Ciudad costera en Cataluña",
  //   // },
  //   // {
  //   //   id: 3,
  //   //   name: "Valencia",
  //   //   position: [39.4699, -0.3763],
  //   //   description: "Ciudad del Mediterráneo",
  //   // },
  // ])
  const locations:Location[] = [
    {
      id: 1,
      name: "USA",
      position: [36.158712, -115.151664],
      description: "Las Vegas",
    },
  ];

  // Posición central del mapa
  const center: [number, number] = [36.158712, -115.151664];

  return (
    <div className="w-full h-screen max-h-[600px] rounded-lg overflow-hidden shadow-lg">
      {/* El componente MapContainer debe renderizarse solo en el cliente */}
      <MapContainer
        center={center}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Renderizar marcadores para cada ubicación */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={customIcon}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-lg">{location.name}</h3>
                <p>{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
