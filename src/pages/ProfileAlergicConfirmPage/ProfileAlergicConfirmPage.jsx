import React, { useContext } from 'react'
import "./ProfileAlergicConfirmPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import CrossComponet from '../../components/CrossComponet/CrossComponent';
import { JwtContext } from '../../shared/contexts/JwtContext';


const ProfileAlergicConfirmPage = () => {

  const { newUser } = useContext(JwtContext);

  const navigate = useNavigate();

  const guardar = () => {
    API.post('users/register', newUser).then(res => {
    console.log('Register user',);
    navigate('/profile/end')
    })
  }

  return (
    <div className='alergicConfirm'>
      <div className='alergicConfirm__out'>
        <CrossComponet ruta={'/login'}></CrossComponet>
      </div>

      <div className='alergicConfirm__title'>
        <h2>Confirma tu selección</h2>
        <p>A continuación te resumimos los alimentos registrados como peligrosos para ti</p>
      </div>

      <div className='alergicConfirm__alergics'>
        <p className='alergicConfirm__alergics--p1'>Marcar para deseleccionar</p>
        <p className='alergicConfirm__alergics--p2'>o añadir uno nuevo</p>
        <div className='alergicConfirm__alergics--specific'>
          {/* AQUI HAY QUE HACER UN MAPEO DEL ARRAY DE LAS ALERGIAS QUE SE HA GUARDADO EN EL USUARIO Y SACAR EL NOMBRE DE TODOS LOS COMPONENTES EN FORMA DE BOTÓN */}
          <button><Link to='/profile/alergics'>Añadir nuevos</Link></button>
        </div>
      </div>

      <button onClick={guardar} className='alergicConfirm__btn'>CONFIRMAR</button>
    </div>
  )
}

export default ProfileAlergicConfirmPage