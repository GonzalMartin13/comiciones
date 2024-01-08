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

const crearPedido = async (ID, descripcion, comentario, estado, precio) => {
    const nuevaVenta = await Ventas.create({
        ID,
        descripcion,
        precio,
        estado,
        comentario,
    })
    return nuevaVenta
}

const todas = async(tipo) =>{
    const todasVentas = await Ventas.findAll()

    if (tipo === "Pendiente") {
        const totalPendiente = todasVentas
            .filter((venta) => venta.estado === "Pendiente")

        return totalPendiente;
    } else if (tipo === "Entregado") {
        const totalEntregado = todasVentas
            .filter((venta) => venta.estado === "Entregado")

        return totalEntregado;
    } else if (tipo === "Total") {
        return todasVentas

    } else {
        return "Si no me decis que total queres que te devuelva no puedo hacer nada mi ciela"
    }
}

module.exports = {totales, ventaID, crearPedido, todas}