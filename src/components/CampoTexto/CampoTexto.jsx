import { useState } from 'react';
import React from 'react'
import './CampoTexto.css'

export const CampoTexto = (props) => {

    const handleChanges = (e) => {

        props.setValor(e.target.value)
    }

    return (
        <div className='campoTexto'>
            <label> {props.titulo} </label>
            <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.value}
            onChange={handleChanges}
            />
        </div>
    )
}
