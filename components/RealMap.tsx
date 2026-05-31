"use client"

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet"

const zones = [
  {
    name: "Zone pétrolière offshore",
    city: "Pointe-Noire",
    position: [-4.7993, 11.8664],
    sector: "Hydrocarbures",
    revenue: "845 Md FCFA",
    color: "#facc15",
  },
  {
    name: "Centre administratif ITIE",
    city: "Brazzaville",
    position: [-4.2634, 15.2429],
    sector: "Gouvernance",
    revenue: "Open Data",
    color: "#06b6d4",
  },
  {
    name: "Zone minière",
    city: "Sangha",
    position: [1.2, 15.5],
    sector: "Mines",
    revenue: "126 Md FCFA",
    color: "#22c55e",
  },
]

export default function RealMap() {
  return (
    <section className="py-8 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">

          {/* HEADER */}
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">

            <div>

              <p className="text-sm font-bold text-cyan-600 uppercase tracking-wider">
                Cartographie nationale
              </p>

              <h2 className="text-4xl font-black text-[#062b57] mt-3">
                Zones extractives interactives
              </h2>

            </div>

            <button className="bg-[#062b57] hover:bg-[#041c3c] text-white px-6 py-3 rounded-2xl font-bold">
              Explorer
            </button>

          </div>

          {/* MAP */}
          <div className="h-[700px]">

            <MapContainer
              center={[-1.5, 15]}
              zoom={6}
              scrollWheelZoom={true}
              className="h-full w-full z-10"
            >

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {zones.map((zone, index) => (
                <CircleMarker
                  key={index}
                  center={zone.position as [number, number]}
                  radius={16}
                  pathOptions={{
                    color: zone.color,
                    fillColor: zone.color,
                    fillOpacity: 0.7,
                  }}
                >

                  <Popup>

                    <div className="w-[240px]">

                      <div
                        className="h-24 rounded-2xl mb-4"
                        style={{
                          background: zone.color,
                        }}
                      />

                      <p className="text-sm font-bold text-cyan-600 uppercase tracking-wider">
                        {zone.sector}
                      </p>

                      <h3 className="text-2xl font-black text-[#062b57] mt-2 leading-tight">
                        {zone.name}
                      </h3>

                      <div className="space-y-3 mt-5">

                        <div className="flex items-center justify-between">

                          <span className="text-slate-500">
                            Ville
                          </span>

                          <span className="font-bold">
                            {zone.city}
                          </span>

                        </div>

                        <div className="flex items-center justify-between">

                          <span className="text-slate-500">
                            Revenus
                          </span>

                          <span className="font-bold">
                            {zone.revenue}
                          </span>

                        </div>

                      </div>

                    </div>

                  </Popup>

                </CircleMarker>
              ))}

            </MapContainer>

          </div>

        </div>

      </div>

    </section>
  )
}