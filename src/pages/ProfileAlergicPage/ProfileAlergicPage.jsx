import React, { useEffect, useState } from 'react'
import "./ProfileAlergicPage.scss"
import { Link } from "react-router-dom";
import volver from "../../assets/volver.png";
import axios from "axios";

const ProfileAlergicPage = () => {

  // const componentss = [
  //   { name: "Aceitunas negras" },
  //   { name: "Aceitunas verdes" },
  //   { name: "Acidulante" },
  //   { name: "Alcaparras" },
  //   { name: "Anchoas" },
  //   { name: "Azúcar" },
  //   { name: "Azúcar glas" },
  //   { name: "Azúcar moreno" },
  //   { name: "Caldo de pollo" },
  //   { name: "Carne de cerdo" },
  //   { name: "Carne de vacuno" },
  //   { name: "Cebolla" },
  //   { name: "Cebolla frita" },
  //   { name: "Canela" },
  //   { name: "Chorizo" },
  //   { name: "Chocolate negro" },
  //   { name: "Condimentos" },
  //   { name: "Especias" },
  //   { name: "Guisantes" },
  //   { name: "Harina de almendras" },
  //   { name: "Harina de trigo" },
  //   { name: "Jamón serrano" },
  //   { name: "Leche" },
  //   { name: "Levadura" },
  //   { name: "Levadura en polvo" },
  //   { name: "Mantequilla" },
  //   { name: "Miel" },
  //   { name: "Pimentón" },
  //   { name: "Pimiento rojo" },
  //   { name: "Pimiento verde" },
  //   { name: "Pollo" },
  //   { name: "Queso" },
  //   { name: "Sal" },
  //   { name: "Sal marina" },
  //   { name: "Salchicha" },
  //   { name: "Tomate" },
  //   { name: "Vainilla" },
  //   { name: "Vitamina A" },
  //   { name: "Vitamina B" },
  //   { name: "Zanahoria" },
  // ];
  // const letras = [];
  
  const letras = {
    a: 'A',
    c: 'C',
    e: 'E',
    g: 'G',
    h: 'H',
    j: 'J',
    l: 'L',
    m: 'M',
    p: 'P',
    q: 'Q',
    s: 'S',
    t: 'T',
    v: 'V',
    z: 'Z'
  }

  // const [components, setComponentes] = useState([]);

  // const getComponents = async () => {

  //   const res = await axios.get("url de la base de datos de mongo")
  //   setComponentes = (res.data);
  // }

  // useEffect(() => {getComponents()}, [])
  
  return (
    
    <div className='alergicPage'>
      <div className='alergicPage__header'>
        <Link><img src={volver} alt='volver'></img></Link>
      </div>

      <div className='alergicPage__title'>
        <h2>Ahora selecciona tus alergias e intolerancias.</h2>
        <p>Los elementos marcados serán identificados en tus búsquedas como peligrosos para tí</p>
      </div>

      <div className='alergicPage__box'>
        Acceso rápido.
      </div>

      <div className='alergicPage__words'>
        AQUI VAN LAS LETRAS DEL ARRAY
      </div>

      <button className='alergicPage__btn'><Link to="/profile/alergics/confirm" >Guardar</Link></button>
    </div>
  )
}

export default ProfileAlergicPage