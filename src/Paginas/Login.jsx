import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesion y administra tus {''}
        <span className="text-slate-700"> proyectos </span> </h1>

        <form className="my-10 bg-white shadow rounded-lg p-10">
          <div className="my-5">
            <label 
            className="uppercase text-gray-600 text-xl font-bold"
            htmlFor="email"  //Al hacer click en el label , activa el input 
            >Email</label>
            <input
              id="email"
              type='email'
              placeholder='Email de registro'
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"

            />
          </div>

          <div className="my-5">
            <label 
            className="uppercase text-gray-600 text-xl font-bold"
            htmlFor="password"  //Al hacer click en el label , activa el input 
            >Password</label>
            <input
              id="password"
              type='password'
              placeholder='password'
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"

            />
          </div>

          <input
            type='submit'
            value='Iniciar Sesion'
            className='text-white bg-sky-700 py-3 w-full uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-sky-800 transition-colors'
          
          />

        </form>

        <nav className="lg:flex lg:justify-between">
              <Link
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to='/registrar'
              >
                  No tienes una cuenta? Registrate
              </Link>

              <Link
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to='/olvide-password'
              >
                  Olvide mi password
              </Link>
        </nav>
    
    
    </>  
    )
}
