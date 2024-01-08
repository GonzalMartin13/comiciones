const { Ventas } = require("../db")
const {totales, ventaID, crearPedido, todas} = require("../contolers/comisionesControlers")

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

const crearHandler = async(req, res) =>{
    const {ID, descripcion, comentario, estado, precio} = req.body
    try {
        const response = await crearPedido(ID, descripcion, comentario, estado, precio)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})  
    }
}

const todasHandler = async(req, res) =>{
    const {tipo} = req.query
    console.log(tipo)
    try {
        const response = await todas(tipo)
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})     
    }
}

module.exports = {totalHandler, ventaHandler, crearHandler, todasHandler}