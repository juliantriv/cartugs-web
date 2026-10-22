import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/cotizaciones`;

// Crear una cotización
export const crearCotizacion = async (datos) => {

    const respuesta = await axios.post(
        API_URL,
        datos
    );

    return respuesta.data;
};