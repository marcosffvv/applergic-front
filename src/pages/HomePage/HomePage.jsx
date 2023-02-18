
import React from 'react'
import "./HomePage.scss"
import buttonInfo from "../../assets/HomeAssets/buttoninfo.png"
import logohome from "../../assets/HomeAssets/logohome.png"
import scanimg from "../../assets/HomeAssets/scanimg.png"
import searchimg from "../../assets/HomeAssets/searchimg.png"
import sos from "../../assets/HomeAssets/sosimg.png"
import StaticMenu from '../../components/HomePageComponents/StaticMenu'
import PopupDemo from '../../components/HomePageComponents/TieredMenu'


const HomePage = () => {
  return (
    <>
      <div className='home'>
        <div className='home-menu'>
        <PopupDemo></PopupDemo>
            {/* <img className="home-menu_hamburguesa" img src ={menuhamburguesa} alt="menuhamburguesa" />   */}
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
        {/* este es el menú estático */}
        <StaticMenu></StaticMenu>
      </div>


    </>
    
  )
}

export default HomePage



