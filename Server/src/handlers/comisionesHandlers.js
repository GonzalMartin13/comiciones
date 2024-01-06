const totalHandler = (req, res) =>{
    try {
        res.status(200).json("Holis")
    } catch (error) {
        res.status(404).json({error: error.mesage})
        
    }
}

module.exports = totalHandler