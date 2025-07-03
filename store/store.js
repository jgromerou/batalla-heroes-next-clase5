import {configureStore} from '@reduxjs/toolkit';
import personajeReducer from './slices/personajesSlice';

export const store = configureStore({
    reducer:{
        personajes: personajeReducer
    }
})