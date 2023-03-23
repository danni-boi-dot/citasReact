const Paciente = ({paciente}) => {

    const {nombre, propietario, email, alta, sintomas} = paciente
    
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
        </div>
    )
}
export default Paciente