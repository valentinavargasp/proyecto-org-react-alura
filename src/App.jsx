import { useState } from 'react'
import './css/index.css'
import { Header } from "./components/Header/Header.jsx"
import { Formulario } from './components/Form/Formulario.jsx'
import { Org } from './components/Org/Org.jsx'

function App() {

  const [mostrarForm, setMostrar] = useState(true)

  const cambiarMostrar = () => {
    setMostrar(!mostrarForm)
  }
  
  return (
    <>
      <Header/>
      {mostrarForm ? <Formulario/> : <></> }
      <Org cambiarMostrar={cambiarMostrar}/>
    </>
  )
}

export default App
