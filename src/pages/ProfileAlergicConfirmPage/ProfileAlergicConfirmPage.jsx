import React from 'react'
import "./ProfileAlergicConfirmPage.scss";
import { Link } from "react-router-dom";
import CrossComponet from '../../components/CrossComponet/CrossComponent';

const ProfileAlergicConfirmPage = () => {

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
          <button><Link to='/profile/alergics' >Añadir nuevos</Link></button>
        </div>
      </div>

      <button className='alergicConfirm__btn'><Link to="/profile/end">CONFIRMAR</Link></button>
    </div>
  )
}

export default ProfileAlergicConfirmPage