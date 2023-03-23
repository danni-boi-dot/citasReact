import React from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-2xl text-center">Seguimiento de Pacientes</h2>
      <p className="text-lg mt-7 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="shadow-md rounded-lg py-8 px-5 bg-blue-100 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold">Nombre de la Mascota</label>
          <input id="mascota"
            type="text"
            placeholder='Nombre de la Mascota'
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 font-bold">Nombre del propietario</label>
          <input id="propietario"
            type="text"
            placeholder='Nombre del propietario'
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
          <input id="email"
            type="email"
            placeholder='Email de Contacto'
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 font-bold">Alta</label>
          <input id="fecha"
            type="date"
            className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold">Sintomas</label>
          <textarea id="sintomas" 
                    placeholder='Describe los sintomas'
                    className="border-2 
                      w-full mt-2 p-2
                     placeholder-gray-400
                      rounded-md"></textarea>
        </div>
        <input type="submit"
                className="bg-indigo-500 w-full p-2 uppercase font-bold text-gray-200 
                hover:bg-blue-800 cursor-pointer transition-colors" 
                value="Agregar Paciente"/>
      </form>
    </div>
  )
}

export default Formulario
