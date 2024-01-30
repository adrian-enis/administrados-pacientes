import { useState, useEffect } from "react"
import Error from "./Error";
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaPaciente, setFechaPaciente] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
   
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaPaciente(paciente.fechaPaciente)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  // console.log(paciente)


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de form
    if ([nombre, propietario, email, fechaPaciente, sintomas].includes("")) {


      setError(true)
    } else {
      setError(false)
    }

    //Objeto Paciente
    const objectoPacientes = {
      nombre,
      propietario,
      email,
      fechaPaciente,
      sintomas
    }

    if(paciente.id){
      //Editando registro
      objectoPacientes.id = paciente.id;
      const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objectoPacientes : pacienteState)
      setPacientes(pacienteActualizado)

      setPaciente({})

    }else { 
      //Nuevo registro
      
      objectoPacientes.id = generarId();
      setPacientes([...pacientes, objectoPacientes])
    }


    //reset Form
    setNombre("")
    setPropietario("")
    setEmail("")
    setFechaPaciente("")
    setSintomas("")
  }
  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center bg-slate-300 ">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className=" bg-slate-300 shadow-md rounded-md py-10 px-5 mt-10">

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className=" mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota:</label>
          <input
            id="mascota"
            required
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario:</label>
          <input
            id="propietario"
            required
            type="text"
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email:</label>
          <input
            id="email"
            required
            type="email"
            placeholder="Email Contacto "
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta del Paciente</label>
          <input
            id="alta"
            required
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fechaPaciente}
            onChange={(e) => setFechaPaciente(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            id="sintomas"
            required
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input type="submit" className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? "Editar paciente" : "Agregar paciente"} />
      </form>
    </div>
  )
}

export default Formulario