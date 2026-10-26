import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/vehiculos`;

// Obtener vehículos
export const obtenerVehiculos = async () => {
const token = localStorage.getItem("token");
const respuesta = await axios.get(API_URL, {
    headers: {
        Authorization: "Bearer " + token
    }
});

return respuesta.data;
};

// Crear vehículo
export const crearVehiculo = async (vehiculo) => {
const token = localStorage.getItem("token");
const respuesta = await axios.post(
    API_URL,
    vehiculo,
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

return respuesta.data;
};

// Actualizar vehículo
export const actualizarVehiculo = async (id, vehiculo) => {
const token = localStorage.getItem("token");
const respuesta = await axios.put(
    API_URL + "/" + id,
    vehiculo,
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

return respuesta.data;
};

// Eliminar vehículo
export const eliminarVehiculo = async (id) => {
const token = localStorage.getItem("token");
const respuesta = await axios.delete(
    API_URL + "/" + id,
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

return respuesta.data;
};
