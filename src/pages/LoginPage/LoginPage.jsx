import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { JwtContext } from '../../shared/contexts/JwtContext';
import { API } from "../../shared/services/api";
import loginimg from "../../assets/loginimg.png";
import logoytexto from "../../assets/logoytexto.png";
import "./LoginPage.scss";

export default function LoginPage () {
    const { register, handleSubmit } = useForm();
    const { setJwt } = useContext(JwtContext);

    const onSubmit = formData => {
        console.log("submit");
        API.post('users/login', formData).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            setJwt(true);
        })
    }

    return (
      <div className="login">
        <div className='login__header'>
          <img className='login__img'  src={loginimg} alt="img"/>
          <img className='login__imglogo'  src={logoytexto} alt="img"/>
        </div>
        <div className='login__body'>
          <div className='login__title'>
              !Bienvenido de nuevo!
          </div>
          <div className='login__subtitle'>
              Por favor, introduce tus datos para continuar.
          </div>

          <form className='login__form' onSubmit={handleSubmit(onSubmit)}>                        
              <input className='login__email' id="email" 
                      placeholder='Dirección e.mail' 
                      // defaultValue="pedro@pedro.com"
                      {...register("email",{required: true})}/>
          
              <input className='login__pwd' id="password"  
                    placeholder='Password' 
                    type="password" 
                    // defaultValue={'Pedro*1'}
                    {...register("password",{required: true})}/>
              <div className='login__blue'>
                ¿Olvidaste la contaseña
              </div>
              <input className='login__btn'  type="submit" value="Entrar"/>
          </form>
          <div className='login__new'>
              ¿nuevo en Applergic?
          </div>
          <div className='login__new-link'>
              Crea tu cuenta aquí
          </div>

        </div>



      </div>
    )
}
