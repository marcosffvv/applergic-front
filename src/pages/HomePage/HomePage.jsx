// import { TieredMenu } from 'primereact/tieredmenu'
import React from 'react'
import "./HomePage.scss"
import buttonInfo from "../../assets/buttoninfo.png"
import menuhamburguesa from "../../assets/menuhamburguesa.png"
import logohome from "../../assets/logohome.png"
import scanimg from "../../assets/scanimg.png"
import searchimg from "../../assets/searchimg.png"
import sos from "../../assets/sosimg.png"

const HomePage = () => {
  return (
    <>
      <div className='home'>
        <div className='home-menu'>
            <img className="home-menu_hamburguesa" img src ={menuhamburguesa} alt="menuhamburguesa" />  
            <img className="home-menu_buttonInfo" img src ={buttonInfo} alt="buttonInfo" />   
        </div>
        <div className='home-logo'>
            <img className="home-menu_logohome" img src ={logohome} alt="logohome" />   
        </div>
        <div className='home-buttons'>
            <div className='home-buttons_scan'>
            {/* Botón de escanear */}
              <button class="button-class1">
                <div><img src ={scanimg} alt="buttonScan"/></div>
                <div><p>Escanear</p></div>
                <div><p className='ocult'>Escanear</p></div>
              </button>
              <p>Escanea un nuevo producto.</p>
            </div>
            <div className='home-buttons_scan'>
            {/* Botón de Buscar producto */}
              <button class="button-class2">
                <div><img src ={searchimg} alt="buttonSearch"/></div>
                <div><p>Buscar</p></div>
                <div><p className='ocult'>Buscar</p></div>
              </button>
              <p>Busca un comercio o restaurante para ti.</p>
            </div>
            <div className='home-buttons_scan'>
            {/* Botón de pedir ayuda */}
              <button class="button-class3">
                <div><img src ={sos} alt="buttonSearch"/></div>
                <div><p>S.O.S</p></div>
                <div><p className='ocult'>S.O.S</p></div>
              </button>
              <p>¿Necesitas ayuda urgente? Contactamos con emergencias.</p>
            </div>
        </div>

      </div>
      {/* <div>
            
            <TieredMenu></TieredMenu>
      </div> */}

    </>
    
  )
}

export default HomePage



