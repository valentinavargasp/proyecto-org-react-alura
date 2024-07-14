import { useState } from 'react'
import './css/index.css'
import { v4 as uuidv4 } from 'uuid';
import { Header } from "./components/Header/Header.jsx"
import { Formulario } from './components/Form/Formulario.jsx'
import { Org } from './components/Org/Org.jsx'
import { Team } from './components/Team/Team.jsx'
import { Footer } from './components/Footer/Footer.jsx'

function App() {

  const [mostrarForm, setMostrar] = useState(true)
  const [colaboradores, setColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/valentinavargasp.png",
    nombre: "Valentina Vargas Pescara",
    puesto: "Desarrolladora de software"
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const cambiarMostrar = () => {
    setMostrar(!mostrarForm)
  }

  //Lista equipos 
  const equipos = [
    {
      id: uuidv4(),
      titulo: 'Programación',
      colorPri: '#57C278',
      colorSec: '#D9F7E9'
    },
    {
      id: uuidv4(),
      titulo: 'Front-End',
      colorPri: '#82CFFA',
      colorSec: '#E8F8FF'
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      colorPri: '#A6D157',
      colorSec: '#F0F8E2'
    },
    {
      id: uuidv4(),
      titulo: 'Devops',
      colorPri: '#E06B69',
      colorSec: '#FDE7E8'
    },
    {
      id: uuidv4(),
      titulo: 'UX y Diseño',
      colorPri: '#DB6EBF',
      colorSec: '#FAE9F5'
    },
    {
      id: uuidv4(),
      titulo: 'Mobile',
      colorPri: '#FFBA05',
      colorSec: '#FFF5D9'
    },
    {
      id: uuidv4(),
      titulo: 'Innovación y Gestión',
      colorPri: '#FF8A29',
      colorSec: '#FFEEDF'
    }
  ]

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador);
    //Uso spread operator
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador 
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }


  return (
    <div className='appContainer'>
      <Header />
      {mostrarForm ? <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
      /> : <></>}
      <Org cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => <Team
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
      />)
      }
      <Footer/>
    </div>
  )
}

export default App
