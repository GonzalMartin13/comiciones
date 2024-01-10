import { useState } from "react";
import axios from "axios";

const CrearVentaFormulario = () => {
  const initialState = {
    ID: "",
    precio: "",
    descripcion: "",
    estado: "Pendiente",
    comentario: "",
  };

  const [venta, setVenta] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenta({ ...venta, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la petición POST con Axios
      const {data} = await axios.post("/crearventa", venta);

      // Mostrar la respuesta del endpoint
      alert(data);

      // Limpiar el formulario
      setVenta(initialState);
    } catch (error) {
      // Manejar errores de la petición
      console.error("Error al enviar la venta:", error.message);
      alert("Error al enviar la venta. Por favor, inténtalo de nuevo.");
    }
    window.location.reload()
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control text-center"
          id="ID"
          name="ID"
          placeholder="N de venta"
          value={venta.id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mx-sm-3 mb-2 row">
        <input
          type="number"
          className="form-control text-center"
          id="precio"
          name="precio"
          placeholder="Precio"
          value={venta.precio}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control text-center"
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
          value={venta.descripcion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <select
          className="form-control text-center"
          id="estado"
          name="estado"
          value={venta.estado}
          onChange={handleChange}
          required
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Entregado">Entregado</option>
        </select>
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control text-center"
          id="comentario"
          name="comentario"
          placeholder="Podes o no agregar un comentario sobre la venta"
          value={venta.comentario}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-dark mb-2">
        Crear Venta
      </button>
    </form>
  );
};

export default CrearVentaFormulario;
