import React from 'react';
import { Link } from 'react-router-dom';
import "./CrossComponent.scss";

const CrossComponet = ({ruta}) => {
  return (
    <div className='crossComponent'>
      <Link to={ruta}>X</Link>
    </div>
  )
}

export default CrossComponet