import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className='footer' style={{ backgroundImage: 'url(/img/Footer.svg)' }}>
            <div className='redes'>
                <a href="https://github.com/valentinavargasp">
                    <img src="/img/github.svg" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/avalentinavargas/">
                    <img src="/img/linkedin.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/valentinapescarav/">
                    <img src="/img/instagram.svg" alt="" />
                </a>
            </div>
            <strong>Desarrollado por <a href='https://github.com/valentinavargasp'>valentinavargasp</a> para Alura Latam</strong>
        </footer>
    )
}
