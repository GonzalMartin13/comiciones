const {Router} = require("express")
const {totalHandler, todasHandler, ventaHandler, matarHandler, crearHandler,modificarHandler} = require("../handlers/comisionesHandlers")
const comisiones = Router()

comisiones.get("/total", totalHandler)
comisiones.get("/venta/:id", ventaHandler)
comisiones.post("/crearventa", crearHandler)
comisiones.get("/todas", todasHandler)
comisiones.put("/actualizar/:id", modificarHandler)
comisiones.delete("/matar/:id", matarHandler)


module.exports = comisiones