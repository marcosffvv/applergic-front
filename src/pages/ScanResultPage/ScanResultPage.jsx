import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VolverComponent from '../../components/VolverComponent/VolverComponent'
import { JwtContext } from '../../shared/contexts/JwtContext';
import start from "../../assets/HomeAssets/logostartmenu.png"
import diario from "../../assets/HomeAssets/logodiariomenu.png"
import share from "../../assets/HomeAssets/logosharemenu.png"
import './ScanResultPage.scss';
import { BtnBlue } from '../../components/BtnComponent/BtnComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const ScanResultPage = () => {
  const { newUser } = useContext(JwtContext);
  const navigate = useNavigate();

  let result='ok';
  let resultText='';
  let resultClassName='';
  if (result==='ok'){
    resultText= "Este producto es apto para ti";
    resultClassName= 'result__body--center--ok';
  }
  if (result==='ko'){
    resultText= "Este producto NO es apto para ti, contiene uva.";
    resultClassName= 'result__body--center--ko';
  }
  if (result==='nd'){
    resultText= "Lo sentimos, no hay datos suficientes para valorar este producto.";
    resultClassName= 'result__body--center--nd';
  }
  let productName="Galletas de avena orgánicas";
  let productBrand="Green Valley";
  let productImg="https://m.media-amazon.com/images/I/81EfaZgPMTL._AC_UF894,1000_QL80_.jpg";


  return (


    <div className='result'>        
        
        <div className='result__volver'>
            <VolverComponent ruta={'/home'}></VolverComponent>
        </div>       
       
        <div className='result__title'>
            Aquí tienes el resultado.
        </div>
        <div className='result__subtitle'>
            {resultText}
        </div>
        <div className='result__body'>
          <div className='result__body--left'> 

          </div>           
          <div className={resultClassName}>
              <div className='result__body--borde'>

              </div>              
              
              <img className='result__body--img' src={productImg} alt='pic not found'></img>              
              
              <div className='result__body--sign'>

              </div>

          </div>
          <div className='result__body--rigth'>             
                <Link to="/evaluate" className='result__body--link'  ><img className='result__body--ico' src ={start} alt="home"/></Link>
                <Link to="/diary" className='result__body--link' ><img className='result__body--ico' src ={diario} alt="home"/></Link>
                <Link to="/home" className='result__body--link' ><img className='result__body--ico' src ={share} alt="home"/></Link>
          </div>
        </div>
        <div className='result__name'>
            {productName}
        </div>
        <div className='result__brand'>
            {productBrand}
        </div>
        <div className='result__components'>

        </div>
        <ButtonComponent ruta='/scan' name='Escanea otro producto'></ButtonComponent>        

    </div>
  )
}

export default ScanResultPage