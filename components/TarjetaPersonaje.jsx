'use client';
import Link from 'next/link';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

const TarjetaPersonaje = () => {
    const personajes = useSelector(state => state.personajes.personajes);
    const [filtro, setFiltro] = useState('');
    const [filtraPersonajes, setFiltraPersonajes] = useState('');

    const handleBuscar = () => {
      
      if(filtro!==''){
        const personajesFiltrados = personajes.find(p => p.nombre.toLowerCase() == filtro.toLowerCase());
        
        if(personajesFiltrados && personajesFiltrados!==undefined) {
          setFiltraPersonajes(personajesFiltrados);
        }
      }
    
    }
    
  return (
     <div>
        {/* FiltrarPersonaje */}
        <div>
            <input type="text" value={filtro} onChange={(e) => setFiltro(e.target.value)} placeholder='Nombre del personaje' />
            <button onClick={handleBuscar} className='btn-primary'>Buscar</button>
        </div>
        <div>
          <Link href={'/personajes/new'} className='bt-primary'>Nuevo</Link>
        </div>
        {/* Listado de personajes */}
        <div className="grid grid-cols-3 gap-4 p-2">
         {
            filtraPersonajes == [] ? (
              personajes?.map((personaje) => (
                <div key={personaje.id} className="border p-4 text-gray-950 rounded bg-white shadow hover:scale-105 transition">
                    <h2 className="text-xl font-bold">{personaje.nombre}</h2>
                    <p className="text-sm text-gray-500 mb-2">{personaje.rol}</p>
                    <Link href={`/personajes/${personaje.id}`} className="inline-block mt-3 text-blue-600 hover:underline">Ver Más</Link>
                </div>
            ))
          ) : (
            
                <div key={filtraPersonajes.id} className="border p-4 text-gray-950 rounded bg-white shadow hover:scale-105 transition">
                    <h2 className="text-xl font-bold">{filtraPersonajes.nombre}</h2>
                    <p className="text-sm text-gray-500 mb-2">{filtraPersonajes.rol}</p>
                    <Link href={`/personajes/${filtraPersonajes.id}`} className="inline-block mt-3 text-blue-600 hover:underline">Ver Más</Link>
                </div>
            )
          
         
        }
       </div>
     </div>
  )
}

export default TarjetaPersonaje