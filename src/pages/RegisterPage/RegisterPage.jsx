import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import camaraImg from "../../assets/camara-fotos.png";
import circuloImg from "../../assets/circulo-camara-fotos.png";
import userPhoto from "../../assets/userphoto.png";
import "./RegisterPage.scss";
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../../shared/contexts/JwtContext';
import VolverComponent from '../../components/VolverComponent/VolverComponent';
import { BtnGrey } from '../../components/BtnComponent/BtnComponent';


export default function RegisterPage () {
    const [photo,setPhoto] = useState('ko');
    const { register, handleSubmit } = useForm();        
    const { setUser } = useContext(JwtContext);
    const navigate = useNavigate();

    const onSubmit = formData => {
        console.log("empezamos a crear nuevo usuario");
        console.log(formData);     
        setUser(formData);
        navigate('/profile/emergency');
    }
    
    const activatePhoto=()=>{      
      if(photo==='ok'){
        setPhoto('ko');
      }else{
        setPhoto('ok');
      }
    }

    return (
      <div className="register">
          <div className='register__volver'>
            <VolverComponent ruta={'/login'}></VolverComponent>
          </div>
          <div className='register__title'>
              Dinos quien eres.
          </div>

          {photo==='ok' && 
            <img onClick={activatePhoto} className='register__img1'  src={userPhoto} alt={photo} />
          }

          {photo==='ko' && <div className='register__header'>        
          <img className='register__img1'  src={circuloImg} alt="img" />
          <img onClick={activatePhoto} className='register__img2'  src={camaraImg} alt="img"/>
          <p  className='register__img3'>Subir foto</p>
        </div>}

        <div className='register__body'>
          {/* <div className='register__subtitle'>
              Por favor, introduce tus datos para continuar.
          </div> */}

          <form className='register__form' onSubmit={handleSubmit(onSubmit)}>                        

              <input className='register__email' id="name" 
                      placeholder='Nombre completo'                       
                      {...register("name",{required: true})}/>

              <input className='register__email' id="email" 
                      placeholder='Dirección e.mail'                       
                      {...register("email",{required: true})}/>

              <input className='register__email' id="phone" 
                      placeholder='Móvil'                       
                      {...register("phone",{required: true})}/>
          
              <input className='register__pwd' id="password"  
                    placeholder='Password' 
                    type="password"                     
                    {...register("password",{required: true})}/>
              
              <BtnGrey showText='Guardar perfil'></BtnGrey>
              {/* <input className='register__btn'  type="submit" value="Guardar perfil"/> */}
          </form>      
   

        </div>



      </div>
    )
}