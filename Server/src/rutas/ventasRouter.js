const {Router} = require("express")
const totalHandler = require("../handlers/comisionesHandlers")
const comisiones = Router()

comisiones.get("/total", totalHandler)

module.exports = comisiones