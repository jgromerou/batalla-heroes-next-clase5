'use client';
import { useParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux';

const DetallePersonaje = () => {
    const { id } = useParams();
    const personaje = useSelector(state => state.personajes.personajes.find((p) => p.id === id));
    if (!personaje) return <p>Personaje no encontrado.</p>

    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold mb-2'>{personaje.nombre}</h2>
            <p className='text-gray-600 mb-2'>{personaje.rol}</p>
            <ul className='text-sm mb-2'>
                <li>Vida: {personaje.vida}</li>
                <li>Defensa: {personaje.defensa}</li>
                <li>Ataque: {personaje.ataque}</li>
                <li>Velocidad:{personaje.velocidad}</li>
            </ul>
            <h3 className='font-semibold mt-4'>Habilidades</h3>
            <ul>
                {
                    personaje.habilidades.map((hab, index) => (
                        <li key={index}>{hab}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DetallePersonaje