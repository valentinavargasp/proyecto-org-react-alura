import React from 'react'
import './OptionsList.css'

export const OptionsList = (props) => {
//Método map -> array.map  ( (equipo, index) => {
// return <option> </option>
// })
//Lo simplifico de la siguiente manera: {equipos.map( (equipo, index) =>  <option key={index}>{equipo}</option>)}

    const equipos = [
        'Programación',
        'Front End',
        'Data Science',
        'Devops',
        'Ux y Diseño',
        'Mobile',
        'Innovación y Gestion'
    ]

    const handleChange = (e) => {
        props.setEquipo(e.target.value)
    }

    return (
        <div className='optionsList'>
            <label>Equipos</label>
            <select value={props.value} onChange={handleChange}>
                <option value='' disabled defaultValue='' hidden>Seleccionar equipo</option>
                {equipos.map( (equipo, index) =>  <option key={index} value={equipo} > {equipo} </option>)}
            </select>
        </div>
    )
}
