const {Router} = require("express");
const ventasRouter = require("./ventasRouter")


const router = Router();

router.use("/venta", ventasRouter)

module.exports = router;