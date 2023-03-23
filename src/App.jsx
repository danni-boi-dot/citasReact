import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
        />
        <ListadoPacientes 
          pacientes={pacientes}
        />
      </div>
    </div>
  )
}
export default App
