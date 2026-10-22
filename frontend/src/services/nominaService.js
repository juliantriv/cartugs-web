import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/nominas`;

// Obtener nóminas
export const obtenerNominas = async () => {
const token = localStorage.getItem("token");

```
const respuesta = await axios.get(API_URL, {
    headers: {
        Authorization: "Bearer " + token
    }
});

return respuesta.data;
```

};

// Crear nómina
export const crearNomina = async (nomina) => {
const token = localStorage.getItem("token");

```
const respuesta = await axios.post(
    API_URL,
    nomina,
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

return respuesta.data;
```

};

// Cambiar estado de una nómina
export const cambiarEstadoNomina = async (id, estado) => {
const token = localStorage.getItem("token");

```
const respuesta = await axios.put(
    API_URL + "/" + id + "/estado",
    { estado },
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

return respuesta.data;
```

};
