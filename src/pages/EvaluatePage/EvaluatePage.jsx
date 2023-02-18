import React from 'react'
import { Link } from 'react-router-dom'
import VolverComponent from '../../components/VolverComponent/VolverComponent'
import LogoEvaluate from "../../assets/LogoEvaluate.png";
import "./EvaluatePage.scss";
import StarsComponent from '../../components/StarsComponent/StarsComponent';


const EvaluatePage = () => {
  return (
    <div className='evaluate-container'>
     
        <VolverComponent ruta={'/home'}></VolverComponent>

        <div className="c-evaluate-padre">
          <div className="c-evaluate-padre__c-logo-hijo">
            <img className="c-evaluate-padre__c-logo-hijo__img-logo" src={LogoEvaluate} alt="img-logo"/>
          </div> 
         
          <div className="c-evaluate-padre__c-texto-hijo">
            <h3>¡Gracias por usar applergic!</h3>
            <h3>Por favor, evalua</h3>
            <h3>tu experiencia.</h3>
          </div>
        
          <div className="c-evaluate-padre__c-stars-hijo">
            <StarsComponent score={3}></StarsComponent>
          </div>

          <div className="c-evaluate-padre__c-link-hijo">
            <Link to="/home" className="nav-link">Enviar Sugerencias</Link>
          </div>
        
        </div>
    </div>

  )
}

export default EvaluatePage