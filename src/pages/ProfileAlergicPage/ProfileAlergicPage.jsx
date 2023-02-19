import React, { useContext, useEffect, useState } from 'react';
import "./ProfileAlergicPage.scss";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import VolverComponent from '../../components/VolverComponent/VolverComponent';
import axios from 'axios';
import { JwtContext } from '../../shared/contexts/JwtContext';

const ProfileAlergicPage = () => {  

  const { setUser, newUser } = useContext(JwtContext);

  // const [miClase, setMiClase] = useState('notSelected');

  const navigate = useNavigate();

  const guardar = () => {
    let completUser = {...newUser, intolerances: alergiasUser};
    setUser(completUser);
    navigate('/profile/alergics/confirm');
  }

  const [components, setComponentes] = useState([]);

  // const claseSelected = 'selected';
  // const claseNotSelected = 'notSelected';

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
  // let noAlergico = [];

  const addIntolerance = (myId) => {
    const foundItem = alergiasUser.find((item) => item === myId);
      if (foundItem) {
        console.log('Elemento eliminado de alergias');
        alergiasUser = alergiasUser.filter((item) => item !== myId);
        console.log(alergiasUser);
      } else {
        console.log('Elemento añadido a alergias');
        alergiasUser = [...alergiasUser, myId];
        // setMiClase('selected');
        console.log(alergiasUser);
      }
  }

  return (
    
    <div className='alergicPage'>
      <div className='alergicPage__header'>
        <VolverComponent ruta={'/profile/emergency'}></VolverComponent>
      </div>

      <div className='alergicPage__title'>
        <h2>Ahora selecciona tus alergias e intolerancias.</h2>
        <p>Los elementos marcados serán identificados en tus búsquedas como peligrosos para tí</p>
      </div>

      <div className='alergicPage__box'>
        {components.map((word, i) => (
          <li key={i}>
            <button>{word.letter}</button>
          </li>
        ))}
      </div>

      {/* AQUI PARA HACER QUE HAYA BOTONES POR CADA LETRA HABRIA QUE TEMER EN EL BACK, EN COMPONENTS, UN OBJETO POR CADA LETRA */}
      <div className='alergicPage__words'>
        {components.map((item, index) => (
          <div className='alergicPage__words__box' key={index}>
            <button className='alergicPage__words__box--letter'>{item.letter}</button>
            <div className='alergicPage__words__box--c'>
              {item.components.map((component, i) => (                
                  <button key={i} className='alergicPage__words__box--c--1' onClick={() => addIntolerance(component.id)} id={component.id}>{component.name}</button>
              ))}
              </div>
          </div>
        ))}
      </div>

      <button onClick={guardar} className='alergicPage__btn'>Guardar</button>
    </div>
  )
}

export default ProfileAlergicPage