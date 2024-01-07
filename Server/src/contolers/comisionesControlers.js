const {Ventas} = require("../db")

const totales = async(tipo) =>{
    const todasVentas = await Ventas.findAll()

    if (tipo === "Pendiente") {
        const totalPendiente = todasVentas
            .filter((venta) => venta.estado === "Pendiente")
            .reduce((sum, venta) => sum + venta.precio, 0);

        return "total pendientes " + totalPendiente;
    } else if (tipo === "Entregado") {
        const totalEntregado = todasVentas
            .filter((venta) => venta.estado === "Entregado")
            .reduce((sum, venta) => sum + venta.precio, 0);

        return "total entregados" + totalEntregado;
    } else if (tipo === "Total") {
        const total = todasVentas.reduce((sum, venta) => sum + venta.precio, 0);
        return "el todo es" + total;

    } else {
        return "Si no me decis que total queres que te devuelva no puedo hacer nada mi ciela"
    }

}

const ventaID = async (id) =>{
    const venta = await Ventas.findByPk(id)
    return venta
}

const crearPedido = async (id, descripcion, comentario, estado, precio) => {
    const nuevaVenta = await Ventas.create({
        id,
        descripcion,
        precio,
        estado,
        comentario,
    })
    return nuevaVenta
}

module.exports = {totales, ventaID, crearPedido}