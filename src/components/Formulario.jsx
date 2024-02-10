import React from 'react'
import { useState } from 'react'
import useClima from '../hooks/useClima'
function Formulario() {

    const [alerta,setAlerta]=useState('');
    const {busqueda,datosBusqueda,consultarClima}=useClima();
    const {ciudad,pais}=busqueda;
    const handleSubmit=(e)=>
    {
      e.preventDefault();
      if(Object.values(busqueda).includes(''))
      {
        setAlerta('Todos los campos son obligatorios');
        return;
      }
      setAlerta('');
      consultarClima(busqueda);
    }

  return (
    <div className='contenedor'>
      {alerta && <p>{alerta}</p>}
     <form action="" onSubmit={handleSubmit}>
     <div className="campo">
            <label htmlFor="ciudad">Ciudad</label>
            <input type="text"  id='ciudad' name='ciudad' placeholder='¿Cual es tu ciudad?' onChange={datosBusqueda} value={ciudad}/>
        </div>
        <div className="campo">
            <label htmlFor="ciudad">Pais</label>
            
            <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
                <option value="">--Seleccione un pais</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">Mexico</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
            </select>
        </div>
        <input type="submit" value="Consultar Clima" />
     </form>
    </div>
  )
}

export default Formulario
