"use client";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

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

type Location = {
  id: number;
  name: string;
  position: [number, number];
  description: string;
};

export default function MapComponent() {
  const locations: Location[] = [
    {
      id: 1,
      name: "USA",
      position: [36.158712, -115.151664],
      description: "Las Vegas",
    },
  ];

  const center: [number, number] = [36.158712, -115.151664];

  return (
    <div className="w-full h-screen max-h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={center}
          radius={18000} // en metros
          pathOptions={{ color: "blue", fillOpacity: 0.2 }}
        />

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
