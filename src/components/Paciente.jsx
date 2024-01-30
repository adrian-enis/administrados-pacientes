
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fechaPaciente, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar?")
    if(respuesta){
      eliminarPaciente(id)

    }
    console.log(id)
  }

  return (
    <div className="bg-white mt-10 rounded-md shadow-md mx-5 px-5 py-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {""}
        <span className="font-normal normal-case">{fechaPaciente}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className=" flex justify-between">
        <button type="button" className=" bg-indigo-600 py-2 px-10 hover:bg-indigo-700 font-bold text-white rounded-md" onClick={() => setPaciente(paciente)} >Edit</button>
        <button type="button" className=" bg-red-600 py-2 px-10 hover:bg-red-700 font-bold text-white rounded-md" onClick={handleEliminar}>Delete</button>
      </div>
    </div>
  )
}

export default Paciente;