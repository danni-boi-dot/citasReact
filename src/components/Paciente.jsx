const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, alta, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas Eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
    
    return (
        <div className="shadow-md rounded-lg py-8 px-5 bg-blue-100 mb-10 mx-5">
            <p className="font-bold mb-3 uppercase text-gray-500">Mascota: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 uppercase text-gray-500">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 uppercase text-gray-500">email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 uppercase text-gray-500">Fecha alta: {''}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 uppercase text-gray-500">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                type="button" className="py-2 px-10
                 hover:bg-blue-700 bg-blue-600 rounded-lg
                  text-white font-bold"
                  onClick={()=> setPaciente(paciente)}>
                    EDITAR
                </button>
                <button
                type="button" className="py-2 px-10
                 hover:bg-red-700 bg-red-600 rounded-lg
                  text-white font-bold"
                  onClick={handleEliminar}>
                    ELIMINAR
                </button>
            </div>
        </div>
    )
}
export default Paciente