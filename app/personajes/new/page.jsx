'use client'
import { agregarPersonaje } from '@/store/slices/personajesSlice'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const NewPersonajePage = () => {

    const dispatch = useDispatch();

    const [id, setId] = useState(Math.round(Math.random()*10000));
    const {register, handleSubmit, formState:{errors}} = useForm();

    const handleAgregar = (data) => {
       setId(Math.round(Math.random()*10000));  
       data.id = id;
       dispatch(agregarPersonaje(data))
    }

   
  return (
    <>
        <div>
            <h1>Agregar Personaje</h1>
        </div>
        <div className='mb-4 grid grid-cols-2 bg-gray-100'>
            <form onSubmit={handleSubmit(handleAgregar)}>
                <input type="text" placeholder='nombre' {...register("nombre")} className='border p-2 m-2' required/>
                <input type="text" placeholder='rol' {...register("rol")} className='border p-2 m-2' required/>
                <input type="text" placeholder='vida' {...register("vida")} className='border p-2 m-2' required/>
                <input type="text" placeholder='ataque' {...register("ataque")} className='border p-2 m-2' required/>
                <input type="text" placeholder='defensa'  {...register("defensa")} className='border p-2 m-2' required/>
                <input type="text" placeholder='velocidad' {...register("velocidad")} className='border p-2 m-2' required/>
                <button type='submit' className='bg-blue-400 text-white p-2 rounded'>Agregar</button>
            </form>
        </div>
    </>
  )
}

export default NewPersonajePage