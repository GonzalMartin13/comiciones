import axios from "axios";
import { useEffect, useState } from "react";


function HomePage() {
    const [pendientes, setPendientes] = useState("")
    const [totales, setTotales] = useState("")
    const [entregados, setEntregados] = useState("")

     useEffect(() => {
          pendHandler()
          totHandler()
          entHandler()
      }, []) 
   
    const entHandler = async() =>{
        const {data} = await axios("/total?tipo=Entregado")
        setEntregados(data)
    }
    const totHandler = async() =>{
        const {data} = await axios("/total?tipo=Total")
        setTotales(data)
    }
    const pendHandler = async() =>{
        const {data} = await axios("/total?tipo=Pendiente")
        setPendientes(data)
    }
    
    return ( 
    <div className="row">
        <div className="col-md-4">
            <h2>Ventas Entregadas</h2>
            <p>{entregados}</p>
        </div>
        <div className="col-md-4">
            <h2>Total de Ventas</h2>
            <p>{totales} </p>
        </div>
        <div className="col-md-4">
            <h2>Ventas Pendientes</h2>
            <p>{pendientes}</p>
        </div>
        
        
        
    </div>
     );
}

export default HomePage;
