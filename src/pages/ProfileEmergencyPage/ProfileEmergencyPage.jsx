import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import "./ProfileEmergencyPage.scss";
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../../shared/contexts/JwtContext';
import VolverComponent from '../../components/VolverComponent/VolverComponent';
import { BtnGrey } from '../../components/BtnComponent/BtnComponent';

export default function ProfileEmergencyPage () {
    const { register, handleSubmit } = useForm();    
    const { setUser, newUser } = useContext(JwtContext);
    console.log("recogemos los datos del usuario");
    console.log(newUser);
    const navigate = useNavigate();

    const onSubmit = formData => {
        // console.log("añadimos los datos de emergencia");
        // console.log(formData);
        let completUser = {...newUser,...formData};
        // console.log(completUser);

        setUser(completUser);
        console.log("datos completos del usuario");        
        console.log(newUser);
        navigate('/profile/alergics');        
    }

    return (
      <div className="profileEmergency">
          
        <div className='profileEmergency__header'>
          <div className='profileEmergency__volver'>
              <VolverComponent ruta={'/register'}></VolverComponent>
          </div>
          <div className='profileEmergency__title'>
            Vamos a añadir tu contacto en caso de emergencia.
          </div>
          <div className='profileEmergency__subtitle'>
            Nos pondremos en contacto con tu persona de confianza y/o compañía de seguros en caso de emergencia.  
          </div>
        </div>

        <div className='profileEmergency__body'>        

          <form className='profileEmergency__form' onSubmit={handleSubmit(onSubmit)}>                        

              <input className='profileEmergency__txt' id="contactName" 
                      placeholder='Nombre completo de tu contacto'                       
                      {...register("contactName",{required: true})}/>

              <input className='profileEmergency__txt' id="contactEmail" 
                      placeholder='Dirección e.mail'                       
                      {...register("contactEmail",{required: true})}/>

              <input className='profileEmergency__txt' id="contactPhone" 
                      placeholder='Móvil'                       
                      {...register("contactPhone",{required: true})}/>
          
          <input className='profileEmergency__txt' id="insuranceCompany" 
                      placeholder='Compañía de seguros/Nº Póliza'                       
                      {...register("insuranceCompany",{required: true})}/>
              
              <BtnGrey showText='Guardar emergencias'></BtnGrey>
              {/* <input className='profileEmergency__btn'  type="submit" value="Guardar emergencias"/> */}
          </form>      
          <div className='profileEmergency__blue'>
             Me registraré en otro momento
          </div>   

        </div>




      </div>
    )
}