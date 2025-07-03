import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personajes: [
        {
            id:"1",
            nombre: "Thor",
            rol: "Tanque",
            vida: 2000,
            ataque: 140,
            defensa: 100,
            velocidad: 20,
            habilidades:["Muro de trueno", "Provocar"]
        },
         {
            id:"2",
            nombre: "Tormenta",
            rol: "Maga",
            vida: 2000,
            ataque: 250,
            defensa: 40,
            velocidad: 45,
            habilidades:["Rayo paralizador", "Tormenta de hielo"]
        },
         {
            id:"3",
            nombre: "DeadPool",
            rol: "Asesino",
            vida: 1000,
            ataque: 300,
            defensa: 30,
            velocidad: 70,
            habilidades:["Regeneración", "Provocar"]
        }
    ],
    resultadoBatalla: null
}

const personajeSlice = createSlice({
    name: 'personaje',
    initialState,
    reducers: {
        setResultadoBatalla: (state, action) => {
            state.resultadoBatalla = action.payload
        }
    }
})

export const { setResultadoBatalla } = personajeSlice.actions;

export default personajeSlice.reducer;