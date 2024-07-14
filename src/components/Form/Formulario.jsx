import React from 'react'
import { useState } from 'react'
import './Formulario.css'
import { CampoTexto } from '../CampoTexto/CampoTexto'
import { OptionsList } from '../OptionsList/OptionsList'
import { Button } from '../Button/Button'

export const Formulario = (props) => {
  const [nombre, setNombre] = useState('')
  const [puesto, setPuesto] = useState('')
  const [foto, setFoto] = useState('')
  const [equipo, setEquipo] = useState('')
  const { registrarColaborador, crearEquipo } = props


  const handleEnviar = (event) => {
    event.preventDefault();

    let datosSend = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosSend);
  }



  return (
    <section className='formulario'>
      <form onSubmit={handleEnviar}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo='Nombre'
          placeholder='Ingresar nombre...'
          required
          value={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo='Puesto'
          placeholder='Ingresar puesto...'
          required
          value={puesto}
          setValor={setPuesto}
        />
        <CampoTexto
          titulo='Foto'
          placeholder='Ingresar enlace de la foto...'
          required
          value={foto}
          setValor={setFoto}
        />
        <OptionsList value={equipo} 
        setEquipo={setEquipo}
        equipos={props.equipos} 
        />
        <Button texto='Crear' />
      </form>

    </section>
  )
}
