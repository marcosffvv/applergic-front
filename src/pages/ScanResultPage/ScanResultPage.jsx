import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VolverComponent from '../../components/VolverComponent/VolverComponent'
import { JwtContext } from '../../shared/contexts/JwtContext';
import start from "../../assets/HomeAssets/logostartmenu.png"
import diario from "../../assets/HomeAssets/logodiariomenu.png"
import share from "../../assets/HomeAssets/logosharemenu.png"
import signOk from "../../assets/ok.png";
import signKo from "../../assets/ko.png";
import signNd from "../../assets/nd.png";
import './ScanResultPage.scss';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { API } from '../../shared/services/api';





const ScanResultPage = () => {
  const { barCode } = useContext(JwtContext);
  // const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [productComponents, setProductComponents] = useState();  
  let componentsTxt="";


  // llama al get con el código de barras que recibe
   useEffect(() => {
    const getProduct = () => {
      try {
        API.get('products/'+barCode).then(res=>{
          setProduct(res.data);
          console.log("get del producto:",res.data);        
          setDatos(res.data);
        })
        
      } catch (error) {
        
      }


    }
    getProduct();
  }, []);
  
  // para cargar en un texto el array de componentes
  const setDatos=(fdata)=>{       
    let arrayComponents=fdata.components;
    arrayComponents.forEach(element => {
      componentsTxt += element.name+', ';
    });    
    console.log("product Components",componentsTxt );
    setProductComponents(componentsTxt);
  }

  let result='ok';
  let resultText='';
  let resultClassName='';
  let resultClassNameSign='';
  let sign;
  if (result==='ok'){
    resultText= "Este producto es apto para ti";
    resultClassName= 'result__body--center--ok';
    resultClassNameSign='signok';
    sign = signOk;
  }
  if (result==='ko'){
    resultText= "Este producto NO es apto para ti, contiene uva.";
    resultClassName= 'result__body--center--ko';
    resultClassNameSign='signko';
    sign = signKo;
  }
  if (result==='nd'){
    resultText= "Lo sentimos, no hay datos suficientes para valorar este producto.";
    resultClassName= 'result__body--center--nd';
    resultClassNameSign='signnd';
    sign = signNd;
  }
  
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
              <img className='result__body--img' src={product.img} alt='pic not found'></img>
              <div className={resultClassNameSign}>
                  <img className="icono"  src={sign} alt="sign"></img>
              </div>
          </div>

          <div className='result__body--rigth'>             
                <Link to="/evaluate" className='result__body--link'  ><img className='result__body--ico' src ={start} alt="home"/></Link>
                <Link to="/diary" className='result__body--link' ><img className='result__body--ico' src ={diario} alt="home"/></Link>
                <Link to="/home" className='result__body--link' ><img className='result__body--ico' src ={share} alt="home"/></Link>
          </div>
        </div>


        <div className='result__name'>
            {product.name}
        </div>
        <div className='result__brand'>
            {product.brand}
        </div>
        <div className='result__components'>
            <span className='result__components--bold'>Ingredientes:</span>{productComponents}
        </div>
        <ButtonComponent ruta='/scan' name='Escanea otro producto'></ButtonComponent>        

    </div>
  )
}

export default ScanResultPage