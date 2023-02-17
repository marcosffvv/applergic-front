import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import camaraImg from "../../assets/camara-fotos.png";
import circuloImg from "../../assets/circulo-camara-fotos.png";
import "./RegisterPage.scss";
import { Link, useNavigate } from 'react-router-dom';
import { JwtContext } from '../../shared/contexts/JwtContext';


export default function RegisterPage () {
    const { register, handleSubmit } = useForm();    
    const { setUser } = useContext(JwtContext);
    const navigate = useNavigate();

    const onSubmit = formData => {
        console.log("empezamos a crear nuevo usuario");
        console.log(formData);     
        setUser(formData);
        navigate('/profile/emergency');
        // setUser({...newUser,...formData2});
        
    }

    return (
      <div className="register">
          <div className='register__volver'>
              <Link to="/login">
                  &lt; Volver  
              </Link> 
          </div>

          <div className='register__title'>
              Dinos quien eres.
          </div>
        <div className='register__header'>
          <img className='register__img1'  src={circuloImg} alt="img" />
          <img className='register__img2'  src={camaraImg} alt="img"/>
          <p  className='register__img3'>Subir foto</p>
        </div>
        <div className='register__body'>
          <div className='register__subtitle'>
              Por favor, introduce tus datos para continuar.
          </div>

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
              
              <input className='register__btn'  type="submit" value="Guardar perfil"/>
          </form>      
   

        </div>



      </div>
    )
}