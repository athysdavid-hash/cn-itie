"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const images = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative h-[700px] overflow-hidden">

      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Compteur TEST */}
      <div className="absolute top-10 right-10 z-50 bg-red-600 text-white text-4xl font-black px-6 py-3 rounded-xl">
        {currentImage}
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">

        <div>

          <h1 className="text-6xl font-black text-white">
            ITIE Congo
          </h1>

          <p className="text-xl text-white mt-4">
            Test du défilement automatique
          </p>

        </div>

      </div>
{/* INDICATEURS DU SLIDER */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">

  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentImage(index)}
      className={`transition-all duration-500 rounded-full ${
        currentImage === index
          ? "w-10 h-3 bg-cyan-400"
          : "w-3 h-3 bg-white/50 hover:bg-white"
      }`}
    />
  ))}

</div>
    </section>
  )
}