import React from 'react'
import useClima from '../hooks/useClima'

function Resultado() {

  const {resultado}=useClima();
  const {name,main}=resultado;

  //grados kelvin
  const kelvin=273.15;
  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es:</h2>
      
      <p>La temperatura actual: {parseInt(main.temp-kelvin)}<span>&#x2103;</span></p>
      <div className='temp_min_max'>
      <p>minima: {parseInt(main.temp_min-kelvin)}<span>&#x2103;</span></p>
      <p>maxima: {parseInt(main.temp_max-kelvin)}<span>&#x2103;</span></p>
      </div>
    </div>
  )
}

export default Resultado
