
const database = require("../config/database");


// Obtener todas las cotizaciones
const obtenerCotizaciones = async () => {
    const [cotizaciones] = await database.query(`
        SELECT
            c.id,
            c.nombre_cliente,
            c.correo_cliente,
            c.telefono_cliente,
            c.marca_vehiculo,
            c.modelo_vehiculo,
            c.anio_vehiculo,
            c.origen,
            c.destino,
            c.fecha_servicio,
            c.comentarios,
            c.fecha_creacion,
            e.nombre AS estado
        FROM cotizaciones c
        INNER JOIN estados_cotizacion e
            ON c.estado_id = e.id
        ORDER BY c.fecha_creacion DESC
    `);

    return cotizaciones;
};




// Crear una cotización
const crearCotizacion = async (cotizacion) => {
    const {
        nombre_cliente,
        correo_cliente,
        telefono_cliente,
        marca_vehiculo,
        modelo_vehiculo,
        anio_vehiculo,
        origen,
        destino,
        fecha_servicio,
        comentarios
    } = cotizacion;

    // Validar el año del vehículo
    const anioTexto = String(anio_vehiculo ?? "").trim();
    const anio = Number(anioTexto);
    const anioActual = new Date().getFullYear();

    if (
        anioTexto === "" ||
        !Number.isInteger(anio) ||
        anio < 1900 ||
        anio > anioActual + 1
    ) {
        throw new Error(
            `El año del vehículo es obligatorio y debe estar entre 1900 y ${anioActual + 1}.`
        );
    }

    // Buscar el estado inicial: pendiente
    const [estado] = await database.query(`
        SELECT id
        FROM estados_cotizacion
        WHERE LOWER(nombre) = 'pendiente'
        LIMIT 1
    `);

    if (estado.length === 0) {
        throw new Error("No existe el estado pendiente en la base de datos.");
    }

    const estado_id = estado[0].id;

    // Guardar la cotización
    const [resultado] = await database.query(`
        INSERT INTO cotizaciones (
            nombre_cliente,
            correo_cliente,
            telefono_cliente,
            marca_vehiculo,
            modelo_vehiculo,
            anio_vehiculo,
            origen,
            destino,
            fecha_servicio,
            comentarios,
            estado_id
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
        nombre_cliente,
        correo_cliente,
        telefono_cliente,
        marca_vehiculo,
        modelo_vehiculo,
        anio,
        origen,
        destino,
        fecha_servicio,
        comentarios,
        estado_id
    ]);

    return resultado.insertId;
};


// Cambiar estado de una cotización
const cambiarEstado = async (id, estado_id) => {
    const [resultado] = await database.query(`
        UPDATE cotizaciones
        SET estado_id = ?
        WHERE id = ?
    `, [estado_id, id]);

    return resultado.affectedRows;
};


module.exports = {
    obtenerCotizaciones,
    crearCotizacion,
    cambiarEstado
};
