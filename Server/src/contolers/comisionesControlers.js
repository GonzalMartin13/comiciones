const {Ventas} = require("../db")

const totales = async(tipo) =>{
    const todasVentas = await Ventas.findAll()

    if (tipo === "Pendiente") {
        const totalPendiente = todasVentas
            .filter((venta) => venta.estado === "Pendiente")
            .reduce((sum, venta) => sum + venta.precio, 0);

        return "Tenes pendiente $" + totalPendiente;
    } else if (tipo === "Entregado") {
        const totalEntregado = todasVentas
            .filter((venta) => venta.estado === "Entregado")
            .reduce((sum, venta) => sum + venta.precio, 0);

        return "Entregaste en total $" + totalEntregado +" cobrarias $" + totalEntregado*0.02;
    } else if (tipo === "Total") {
        const total = todasVentas.reduce((sum, venta) => sum + venta.precio, 0);
        return "En total vendiste $" + total 

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
    return "Sumaste una venta, bien wacho!"
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

const modificacion = async(id) =>{
    const ventaAModificar = await Ventas.findByPk(id)
    if(ventaAModificar.estado === 'Entregado'){
        ventaAModificar.estado = "Pendiente"
        await ventaAModificar.save()
        return `La venta ${id}, se ha marcado como entregada`
    } else if ( ventaAModificar.estado === "Pendiente"){
        ventaAModificar.estado = "Entregado"
        await ventaAModificar.save()
        return `La venta ${id}, se ha marcado como pendiente`
    } else {
        return "Tan dificil es poner un numero valido men?"
    }
    

}

const kill = async(id) =>{
    const ventaMuerta = await Ventas.destroy({
        where: {
            ID: id
        }
    })
    if (ventaMuerta === 1){
    return `La venta ${id} ha sido eliminada de la world wide web`
    } else {
        return "No se encontro esa venta, tal vez sea porque no existe o porque sos hijo de primos"
    }
}

module.exports = {totales, kill, ventaID, crearPedido, todas, modificacion}