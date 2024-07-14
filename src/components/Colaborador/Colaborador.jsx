import React from 'react'
import './Colaborador.css'
import { AiOutlineUserDelete } from "react-icons/ai";

export const Colaborador = (props) => {

    const { nombre, puesto, foto, equipo, id } = props.datos
    const {colorPri, eliminarColaborador} = props

    return (
        
        <div className='colaborador'>
            <AiOutlineUserDelete className='delete' onClick={() => eliminarColaborador(id)}/>
            <div className='encabezado' style={{backgroundColor: colorPri}}>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}
