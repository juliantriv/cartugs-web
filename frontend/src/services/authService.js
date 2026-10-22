import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

export const iniciarSesion = async (correo, password) => {
const respuesta = await axios.post(`${API_URL}/login`, {
correo,
password,
});

return respuesta.data;
};
