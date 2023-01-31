import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import { Alerta } from "../Componentes/Alerta"
import axios from 'axios'

export const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const params = useParams();
  console.log(params);
  const { id } = params;

  useEffect(() => {
    
    const confirmar = async () => {
      try {
        const url = `http://localhost:4000/api/usuarios/confirmar/${id}`
        const { data } = await axios.get(url)

        setAlerta({
          msg: data.msg,
          error: false
        })

        //setCuentaConfirmada(true)

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    
    confirmar()
    
  }, [])
  
  
  const { msg } = alerta


  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu cuenta y comienza a crear tus {''}
        <span className="text-slate-700"> proyectos </span> </h1>

      <div>
        {msg && <Alerta alerta={alerta} />}
         {
          setCuentaConfirmada && (
            <Link
              className='block text-center my-5 text-slate-500 uppercase text-sm'
              to='/'
            >
              Inicia Sesion
            </Link>
          )
        } 
      </div>
    </>
  )
}
