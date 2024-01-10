import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import daddy from "./assets/daddy.png";
import "./App.css";
import HomePage from "./Compo/HomePahe/Homepage";
import CrearVentaFormulario from "./Compo/Form/form";
import ActualizarVentaFormulario from "./Compo/Actualizador/actualizardor/actulizar";

function App() {
  return (
    <>
      <div className="mb-5 row">
        <a className="col-4">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a className="col-4">
          <img src={daddy} className="logo" alt="React logo" />
        </a>
        <a className="col-4">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>COMIZAUM DEL CHUSO PA</h1>
      </div>
      <HomePage/> 
      <h4>Entregaste algo? Modifica el estado</h4>
      <ActualizarVentaFormulario/> 
      <h4> Venta nueva? Aveeeeer 🤔</h4>
      <CrearVentaFormulario/> 


    </>
  );
}

export default App;
