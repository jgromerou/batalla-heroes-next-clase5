'use client';
import { useState } from 'react';
import SelectorPersonaje from '@/components/SelectorPersonaje';
import { useSelector } from 'react-redux'
import axios from 'axios';

const BatallaPage = () => {
    const personajes = useSelector(state => state.personajes.personajes);
    const [personajeA, setPersonajeA] = useState('');
    const [personajeB, setPersonajeB] = useState('');
    const [resultado, setResultado] = useState(null);

    const simularBatalla = async () => {
        //asgurarse de hacer una validación que se seleccione los personajes y que sean diferentes
        const personaje1 = personajes.find((p) => p.id == personajeA) 
        const personaje2 = personajes.find((p) => p.id == personajeB) 

       try {
            const resp = await axios.post("/api/batalla", {
                personaje1,  // Considera usar minúscula para propiedades: personaje1
                personaje2   // personaje2 para mantener consistencia con convenciones
            });
            
            //console.log({resp});
            
            setResultado(resp.data); 
            
        } catch (error) {
            console.error('Error en la batalla:', error); // Mejor usar console.error para errores
}
    }

  return (
    <div className='p-6 max-w-xl mx-auto'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Simulador de Batalla</h1>

        <div className='flex gap-4 mb-4 justify-center'>
            <SelectorPersonaje personajes={personajes} value={personajeA} onChange={(e)=>setPersonajeA(e.target.value)} label="Personaje A"/>
            <SelectorPersonaje personajes={personajes} value={personajeB} onChange={(e)=>setPersonajeB(e.target.value)} label="Personaje B"/>
        
            <button onClick={simularBatalla}>Simular Batalla</button>
        </div>
        <div>
            {
                resultado && (
                    <div>
                        <div>
                            <span>Cantidad de Rondas: {resultado.rondas}</span>
                        </div>
                        {
                            resultado.ganador == "empate" ? (
                                <>
                                    <span>La batalla terminó en Empate
                                    </span>
                                </> )
                                : (
                                <>
                                    <span>El ganador es {resultado.ganador}</span>
                                </>
                                )
                            
                        }

                        <div>
                            Vida final del personaje A: {resultado.vidaA} <br />
                            Vida final del personaje B: {resultado.vidaB} <br />
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    
  )
}

export default BatallaPage