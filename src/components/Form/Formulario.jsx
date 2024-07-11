import React from 'react'
import './Formulario.css'
import { CampoTexto } from '../CampoTexto/CampoTexto'

export const Formulario = () => {
  return (
    <section className='formulario'>
        <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto/>
        </form>
    </section>
  )
}
