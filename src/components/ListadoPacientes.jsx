import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-7 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-7 mb-10 text-center">
            Agrega algun paciente y {''}
            <span className="text-indigo-500 font-bold">se mostrara AQUI</span>
          </p>

        </>
      )}
    </div>
  )
}

export default ListadoPacientes
