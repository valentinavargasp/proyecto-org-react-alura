import React from 'react'
import add from '/img/add.svg'
import './Org.css'
import { useState } from 'react'


export const Org = (props) => {
    //HOOKS - voy a usar useState() const [nombreVariable, funciónAct] = useState(valorInicial)
/*
    const [mostrar, actualizarMostrar] = useState(true)
    const handleClick = () => {
        console.log('Mostrar/Ocultar Elemento', !mostrar);
        actualizarMostrar(!mostrar)
    }*/

    return (
        <section className='orgSection'>
            <h3 className='titleOrg'>Mi Organización</h3>
            <img src={add} alt="add" onClick={props.cambiarMostrar} />
        </section>
    )
}
