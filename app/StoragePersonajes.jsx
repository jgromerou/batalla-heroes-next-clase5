'use client';
import { setLocalStorageInit } from "@/store/slices/personajesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const StoragePersonajes = () => {
    const dispatch = useDispatch();



    useEffect(() => {
        const personajes = JSON.parse(localStorage.getItem("personajes")) || [];
        console.log(personajes);
        dispatch(setLocalStorageInit(personajes));
    }, [])

    return null
}

export default StoragePersonajes