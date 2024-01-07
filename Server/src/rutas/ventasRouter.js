const {Router} = require("express")
const {totalHandler, ventaHandler, crearHandler} = require("../handlers/comisionesHandlers")
const comisiones = Router()

comisiones.get("/total", totalHandler)
comisiones.get("/:id", ventaHandler)
comisiones.post("/crearventa", crearHandler)

module.exports = comisiones