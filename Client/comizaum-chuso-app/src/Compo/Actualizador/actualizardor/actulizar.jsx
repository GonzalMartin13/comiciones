import { useState } from 'react';
import axios from 'axios';

const ActualizarVentaFormulario = () => {
  const [idToUpdate, setIdToUpdate] = useState('');

  const handleIdChange = (e) => {
    setIdToUpdate(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Realizar la petición PUT con Axios
      const {data} = await axios.put(`/actualizar/${idToUpdate}`, {
        // Puedes enviar cualquier otro dato adicional si es necesario
      });

      // Mostrar la respuesta del endpoint
      alert(data);

      // Limpiar el campo
      setIdToUpdate('');
    } catch (error) {
      // Manejar errores de la petición
      console.error('Error al actualizar la venta:', error.message);
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
          placeholder='Ingresa la venta entregada'
          value={idToUpdate}
          onChange={handleIdChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-dark col-6" onClick={handleUpdate}>
        Actualizar Venta
      </button>
    </form>
  );
};

export default ActualizarVentaFormulario;
