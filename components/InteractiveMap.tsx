"use client"

import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
)
export default function InteractiveMap() {
  return (
    <section className="bg-white rounded-[24px] overflow-hidden border border-slate-200 shadow-lg">

      <div className="px-5 py-4 border-b border-slate-200">

        <p className="text-cyan-600 uppercase text-xs font-black tracking-[0.15em]">
          Cartographie Interactive
        </p>

        <h2 className="text-2xl font-black text-[#062b57] mt-2">
          Ressources Extractives du Congo
        </h2>

      </div>

      <MapContainer
        center={[-4.26, 15.28]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[-4.78, 11.86]} >
          <Popup>
            <strong>Pointe-Noire Offshore</strong>
            <br />
            Production pétrolière
            <br />
            57,3 M barils/an
          </Popup>
        </Marker>

        <Marker position={[-4.2, 13.3]} >
          <Popup>
            <strong>Marine XII</strong>
            <br />
            Champ pétrolier
          </Popup>
        </Marker>

        <Marker position={[-2.8, 13.8]} >
          <Popup>
            <strong>Zanaga</strong>
            <br />
            Projet minier de fer
          </Popup>
        </Marker>

        <Marker position={[-4.26, 15.28]} >
          <Popup>
            <strong>Brazzaville</strong>
            <br />
            Siège CN-ITIE Congo
          </Popup>
        </Marker>

      </MapContainer>

    </section>
  )
}