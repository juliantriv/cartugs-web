import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/empleados`;

// Obtener empleados
export const obtenerEmpleados = async () => {
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

// Crear empleado
export const crearEmpleado = async (empleado) => {
const token = localStorage.getItem("token");

```
const respuesta = await axios.post(
    API_URL,
    empleado,
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

return respuesta.data;
```

};

// Actualizar empleado
export const actualizarEmpleado = async (id, empleado) => {
const token = localStorage.getItem("token");

```
const respuesta = await axios.put(
    API_URL + "/" + id,
    empleado,
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

return respuesta.data;
```

};

// Eliminar empleado
export const eliminarEmpleado = async (id) => {
const token = localStorage.getItem("token");

```
const respuesta = await axios.delete(
    API_URL + "/" + id,
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

return respuesta.data;
```

};
