import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/cotizaciones`;

// Obtener cotizaciones
export const obtenerCotizaciones = async () => {
const token = localStorage.getItem("token");
const respuesta = await axios.get(API_URL, {
    headers: {
        Authorization: "Bearer " + token
    }
});

return respuesta.data;
};

// Cambiar estado de una cotización
export const cambiarEstadoCotizacion = async (id, estado_id) => {
    const token = localStorage.getItem("token");

    const respuesta = await axios.put(
        API_URL + "/" + id + "/estado",
        { estado_id },
        {
            headers: {
                Authorization: "Bearer " + token
            }
        }
    );

    return respuesta.data;
};
