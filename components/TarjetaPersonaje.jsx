'use client';
import Link from 'next/link';
import { useSelector } from 'react-redux'

const TarjetaPersonaje = () => {
    const personajes = useSelector(state => state.personajes.personajes)
  return (
     <div className="grid grid-cols-3 gap-4 p-2">
         {
            personajes.map((personaje) => (
                <div key={personaje.id} className="border p-4 text-gray-950 rounded bg-white shadow hover:scale-105 transition">
                    <h2 className="text-xl font-bold">{personaje.nombre}</h2>
                    <p className="text-sm text-gray-500 mb-2">{personaje.rol}</p>
                    <Link href={`/personajes/${personaje.id}`} className="inline-block mt-3 text-blue-600 hover:underline">Ver Más</Link>
                </div>
            ))
        }
       </div>
  )
}

export default TarjetaPersonaje