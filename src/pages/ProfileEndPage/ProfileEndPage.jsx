import React from 'react';
import "./ProfileEndPage.scss";
import { Link } from "react-router-dom";
import VolverComponent from '../../components/VolverComponent/VolverComponent';
import CrossComponet from '../../components/CrossComponet/CrossComponent';

const ProfileEndPage = () => {
  return (
    <div className='profileEnd'>
      <div className='profileEnd__header'>
        <VolverComponent ruta={'/profile/alergics/confirm'}></VolverComponent>
        <CrossComponet ruta={'/login'}></CrossComponet>
      </div>
    </div>
  )
}

export default ProfileEndPage