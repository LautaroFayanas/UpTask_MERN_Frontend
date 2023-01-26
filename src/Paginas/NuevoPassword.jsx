import React from 'react'

export const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Restablece tu password y no pierdas acceso a tus {''}
        <span className="text-slate-700"> proyectos </span> </h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">

        <div className="my-5">
          <label
            className="uppercase text-gray-600 text-xl font-bold"
            htmlFor="email"  //Al hacer click en el label , activa el input 
          >Nuevo password</label>
          <input
            id="password"
            type='password'
            placeholder='Escribe tu nuevo password'
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50" x

          />
        </div>

        <input
          type='submit'
          value='Guardar nuevo password'
          className='text-white bg-sky-700 py-3 w-full uppercase font-bold rounded 
    hover:cursor-pointer hover:bg-sky-800 transition-colors'

        />

      </form>
    </>
  )
}
