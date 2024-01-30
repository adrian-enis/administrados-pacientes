import { useEffect } from "react"
import Paciente from "./Paciente"


import React from 'react'

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
          <p className="text-xl mt-5 text-center  bg-slate-300">
            Administra tus {""}
            <span className=" text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {
            pacientes.map((paciente) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />

              )
            })
          }


        </>
      ) : (

        <>

          <h2 className="font-black text-3xl text-center">No hay pacientes agregados</h2>
          <p className="text-xl mt-5 text-center  bg-slate-300">
            Empieza agregando tus {""}
            <span className=" text-indigo-600 font-bold">Pacientes y apareceran aqui</span>
          </p>

        </>
      )}


    </div>
  )
}

export default ListadoPaciente
