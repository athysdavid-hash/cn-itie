"use client"

import "leaflet/dist/leaflet.css"

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet"

import L from "leaflet"

// FIX ICONS (OBLIGATOIRE sinon invisible)
import iconUrl from "leaflet/dist/images/marker-icon.png"
import shadowUrl from "leaflet/dist/images/marker-shadow.png"

L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl,
})

export default function MapClient() {

  return (
    <MapContainer
      center={[-4.26, 15.28]}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
    >

      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-4.78, 11.86]}>
        <Popup>Pointe-Noire Offshore</Popup>
      </Marker>

      <Marker position={[-4.2, 13.3]}>
        <Popup>Marine XII</Popup>
      </Marker>

      <Marker position={[-2.8, 13.8]}>
        <Popup>Zanaga (Fer)</Popup>
      </Marker>

      <Marker position={[-4.26, 15.28]}>
        <Popup>Brazzaville ITIE</Popup>
      </Marker>

    </MapContainer>
  )
}