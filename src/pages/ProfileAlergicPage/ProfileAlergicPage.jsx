
import React, { useContext, useEffect, useState } from 'react'
import "./ProfileAlergicPage.scss"
import { Link, Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
import VolverComponent from '../../components/VolverComponent/VolverComponent';
import axios from 'axios';
import { JwtContext } from '../../shared/contexts/JwtContext';

const ProfileAlergicPage = () => {  

  const { setUser, newUser } = useContext(JwtContext);

  const letras = [
    {word: 'A'},
    {word: 'C'},
    {word: 'E'},
    {word: 'G'},
    {word: 'H'},
    {word: 'J'},
    {word: 'L'},
    {word: 'M'},
    {word: 'O'},
    {word: 'P'},
    {word: 'Q'},
    {word: 'S'},
    {word: 'T'},
    {word: 'U'},
    {word: 'V'},
    {word: 'Z'}
  ]
  // const { setJwt } = useContext(JwtContext);

  const [miClase, setMiClase] = useState('notSelected');

  const navigate = useNavigate();


  const guardar = () => {
    let completUser = {...newUser, intolerances: alergiasUser};
    setUser(completUser);
    navigate('/profile/alergics/confirm');
  }



  const [components, setComponentes] = useState([]);

  const claseSelected = 'selected';
  const claseNotSelected = 'notSelected';

  const getComponents = async () => {
    const res = await axios.get("http://localhost:5001/components");
    console.log("consoling components");
    setComponentes(res.data)
  }
  useEffect(() => {getComponents()}, []);

  // const getComponentsWord = async () => {
  //   console.log("getting components");
  //       API.get('components').then(res => {
  //         localStorage.setItem('components', JSON.stringify(res.data))
  //         console.log(res.data);
  //       })
  // }
  // useEffect(() => {getComponentsWord()}, [])
  
  let alergiasUser = [];
  let noAlergico = [];

  const addIntolerance = (myId) => {
    const foundItem = alergiasUser.find((item) => item === myId);
      if (foundItem) {
        console.log('El elemento encontrado es:', foundItem);
        alergiasUser = alergiasUser.filter((item) => item !== myId);
        console.log(alergiasUser);
      } else {
        console.log('El elemento no se encontró en el array');
        alergiasUser = [...alergiasUser, myId];
        setMiClase('selected');
        console.log(alergiasUser);
      }
  }

  return (
    
    <div className='alergicPage'>
      <div className='alergicPage__header'>
        <VolverComponent ruta={'/home'}></VolverComponent>
      </div>

      <div className='alergicPage__title'>
        <h2>Ahora selecciona tus alergias e intolerancias.</h2>
        <p>Los elementos marcados serán identificados en tus búsquedas como peligrosos para tí</p>
      </div>

      <div className='alergicPage__box'>
        {/* <p>Acceso rápido</p> */}
        {letras.map((word, i) => (
          <li key={i}>
            <button>{word.word}</button>
          </li>
        ))}
      </div>

      

      <div className='alergicPage__words'>
      {components.map((item, index) => (
        <div key={index}>
            <button className={miClase} onClick={() => addIntolerance(item._id)} id={item._id}>{item.name}</button>
        </div>
      ))}
      </div>

      <button onClick={guardar} className='alergicPage__btn'>Guardar</button>

      
    </div>
  )
}

export default ProfileAlergicPage