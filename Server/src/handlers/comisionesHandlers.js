const { response } = require("express")
const {totales, ventaID} = require("../contolers/comisionesControlers")

const totalHandler = async(req, res) =>{
    const {tipo} = req.query
    try {
        const response = await totales(tipo)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
}

const ventaHandler = async(req, res) =>{
    const {id} = req.params 
    try {
        const response = await ventaID(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})  
    }
}

const crearHandler = async (req, res) =>{
    const {id, descripcion, comentario, estado, precio} = req.body
    try {
        response = await crearPedido(id, descripcion, comentario, estado, precio)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})  
    }
}

module.exports = {totalHandler, ventaHandler, crearHandler}