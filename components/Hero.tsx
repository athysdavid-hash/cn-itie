"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const images = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg",
  ]

  const [currentImage, setCurrentImage] = useState(0)
console.log("RENDER HERO", currentImage)
useEffect(() => {
  console.log("USEEFFECT LANCE")

  const interval = setInterval(() => {
    console.log("TICK")
    setCurrentImage((prev) => prev + 1)
  }, 1000)

  return () => clearInterval(interval)
}, [])
  return (
    <section className="relative h-[700px] overflow-hidden">

      {/* IMAGES */}
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

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENU */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">

        <div>

          <h1 className="text-6xl font-black text-white">
            ITIE Congo
          </h1>
<p className="text-red-500 text-5xl font-black">
  {currentImage}
</p>
          <p className="text-xl text-white mt-4">
            Transparence des industries extractives
          </p>

        </div>

      </div>

      {/* INDICATEURS */}
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