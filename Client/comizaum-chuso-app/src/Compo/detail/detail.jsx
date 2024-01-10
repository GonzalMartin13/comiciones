import { useState } from 'react';
import axios from 'axios';

const DetalleVenta = () => {
  const [idToUpdate, setIdToUpdate] = useState('');

  const handleIdChange = (e) => {
    setIdToUpdate(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Realizar la petición PUT con Axios
      const {data} = await axios(`/venta/${idToUpdate}`, {
        // Puedes enviar cualquier otro dato adicional si es necesario
      });

      // Mostrar la respuesta del endpoint
      alert("Productos: " + data.descripcion + " Precio: " + data.precio + " Estado: " + data.estado);

      // Limpiar el campo
      setIdToUpdate('');
    } catch (error) {
      // Manejar errores de la petición
      console.error('Error al buscar la venta:', error.message);
      alert('Error al actualizar la venta. Por favor, inténtalo de nuevo.');
    }
    window.location.reload()
  };

  return (
    <form className='row'>
      <div className="form-group col-6">
        <input
          type="text"
          className="form-control text-center"
          id="idToUpdate"
          placeholder='N de Venta para detallar'
          value={idToUpdate}
          onChange={handleIdChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-dark col-6" onClick={handleUpdate}>
        Ver Detalle
      </button>
    </form>
  );
};

export default DetalleVenta;
