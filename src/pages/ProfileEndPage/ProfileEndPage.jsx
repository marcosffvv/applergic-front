import React from 'react';
import "./ProfileEndPage.scss";
import { Link } from "react-router-dom";
import VolverComponent from '../../components/VolverComponent/VolverComponent';
import CrossComponet from '../../components/CrossComponet/CrossComponent';
import perfect from '../../assets/alergics-finish.png';

const ProfileEndPage = () => {
  return (
    <div className='profileEnd'>
      <div className='profileEnd__header'>
        <VolverComponent ruta={'/profile/alergics/confirm'}></VolverComponent>
        <CrossComponet ruta={'/login'}></CrossComponet>
      </div>
      <div className='profileEnd__card'>
        <img src={perfect} alt='alergics-finish'></img>
        <h3>Hemos terminado, ya puedes escanear tu primer producto.</h3>
      </div>
      <Link to='/scan'><button>Escanea un producto</button></Link>
    </div>
  )
}

export default ProfileEndPage