import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return fecha + random
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      console.log('Hay almenos un campo vacio')
      setError(true)
      return;
    }

    setError(false)

    //Objeto de Paciente
    const objetoPacientes = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      id: generarId()
    }
    setPacientes([...pacientes, objetoPacientes]);
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-2xl text-center">Seguimiento de Pacientes</h2>
      <p className="text-lg mt-7 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-500 font-bold">Administralos</span>
      </p>
      <form className="shadow-md rounded-lg py-8 px-5 bg-blue-100 mb-10 mx-5 my-10"
        onSubmit={handleSubmit}>
        {error && 
        <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold">Nombre de la Mascota</label>
          <input id="mascota"
            type="text"
            placeholder='Nombre de la Mascota'
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 font-bold">Nombre del propietario</label>
          <input id="propietario"
            type="text"
            placeholder='Nombre del propietario'
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
          <input id="email"
            type="email"
            placeholder='Email de Contacto'
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 font-bold">Alta</label>
          <input id="fecha"
            type="date"
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold">Sintomas</label>
          <textarea id="sintomas"
            placeholder='Describe los sintomas'
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input type="submit"
          className="bg-indigo-500 w-full p-2 uppercase font-bold text-gray-200 
                hover:bg-blue-800 cursor-pointer transition-colors"
          value="Agregar Paciente" />
      </form>
    </div>
  )
}

export default Formulario
