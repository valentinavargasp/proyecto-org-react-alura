import React from 'react'
import './Button.css'

export const Button = (props) => {
    return (
        <button className='button'>{props.texto}</button>
    )
}
