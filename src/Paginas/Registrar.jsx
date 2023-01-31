import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alerta } from '../Componentes/Alerta'
import axios from 'axios'

export const Registrar = () => {

  const [ nombre , setNombre ] = useState('')
  const [ email , setEmail ] = useState('')
  const [ password , setPassword ] = useState('')
  const [ repetirPassword , setRepetirPassword ] = useState('')

  const [ alerta , setAlerta ] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    //Puedo poner todos dentro de un corchete y asi tener acceso a includes mucho mas facil para verificar.
    if([nombre,email,password,repetirPassword].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });

      return;
    }

    if(password !== repetirPassword){
      setAlerta({
        msg: 'Los password no son iguales',
        error: true
      });
    }

    if(password.length < 6){
      setAlerta({
        msg: 'El password debe tener minimo 6 caracteres',
        error: true
      });
    }

    //Si todo esta bien , vuelve a ser un objeto vacio y la condicion no se cumple
    setAlerta({})

    //Crear el usuario de la API...
    try {
          const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`, { 
          nombre , email , password
        })

        console.log(data);

        setAlerta({
          msg: data.msg,
          error: false
        })

        setNombre('')
        setEmail('')
        setPassword('')
        setRepetirPassword('')

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    }

  }

  const { msg } = alerta
  
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Crea tu cuenta y administra tus {''}
        <span className="text-slate-700"> proyectos </span> </h1>

        {msg && <Alerta alerta={alerta}/>}

        <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow rounded-lg p-10">

        <div className="my-5">
            <label 
            className="uppercase text-gray-600 text-xl font-bold"
            htmlFor="nombre"  //Al hacer click en el label , activa el input 
            >Nombre</label>
            <input
              id="nombre"
              type='text'
              placeholder='Tu nombre'
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={nombre}
              onChange={ e => setNombre(e.target.value)}
            />
          </div>

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
              value={email}
              onChange={ e => setEmail(e.target.value)}  
            />
          </div>

          <div className="my-5">
            <label 
            className="uppercase text-gray-600 text-xl font-bold"
            htmlFor="email"  //Al hacer click en el label , activa el input 
            >Password</label>
            <input
              id="password"
              type='password'
              placeholder='Password'
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={ e => setPassword(e.target.value)}

            />
          </div>

               <div className="my-5">
            <label 
            className="uppercase text-gray-600 text-xl font-bold"
            htmlFor="password2"  //Al hacer click en el label , activa el input 
            >Repetir password</label>
            <input
              id="password2"
              type='password'
              placeholder='Repetir tu password'
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={repetirPassword}
              onChange={ e => setRepetirPassword(e.target.value)}
            />
          </div>

          <input
            type='submit'
            value='Crear cuenta'
            className='text-white bg-sky-700 py-3 w-full uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-sky-800 transition-colors'
          
          />

        </form>

        <nav className="lg:flex lg:justify-between">
              <Link
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to='/'
              >
                  Ya tienes una cuenta? Inicia Sesion
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
