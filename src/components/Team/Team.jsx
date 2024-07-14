import React from 'react'
import './Team.css'
import { Colaborador } from '../Colaborador/Colaborador'

export const Team = (props) => {
    const { colorPri, colorSec, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador} = props

    return (
        <>
            {
                colaboradores.length > 0 &&
                <section className='team' style={{ backgroundColor: colorSec }}>
                    <h3 style={{ borderColor: colorPri }}>{titulo}</h3>
                    <div className='colaboradores'>
                        {colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPri={colorPri}
                            eliminarColaborador={eliminarColaborador}
                        />)}
                    </div>
                </section>
            }
        </>

    )
}
