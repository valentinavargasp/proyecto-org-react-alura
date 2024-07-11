import React from 'react'
import header from '../../../public/img/header.png'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
        <img src={header} alt="Org header" />
    </header>
  )
}
