import React from 'react'
import CrossComponet from '../../components/CrossComponet/CrossComponent'
import cbarras from '../../../src/assets/codigobarras.png'
import qr from '../../../src/assets/qr.png'
import nfc from '../../../src/assets/nfc.png'
// import ScanCodePage from './ScanCodePage/ScanCodePage'
import { Link } from 'react-router-dom';
import "./ScanPage.scss"

export default function ScanPage(){
  return(
    <div>
      <div className='close'><CrossComponet ruta={'/home'}></CrossComponet></div>
      <div className='info-p'>
         <div className='info'>
            <p className='titleBold'>Escaneando...</p>
            <p className='titleNormal'>Tan solo tienes que centrar el<br></br>código de barras del producto <br></br> en el recuadro.</p> 
        </div>
      </div>

      <div className='scancodepage'></div>
      {/* <ScanCodePage></ScanCodePage> */}

      <div className='linksScan'>
      <Link to = {'/home'}><button class="buttonScan">
            <div><img className='imgScan' src ={cbarras} alt="buttonScan"/></div>
      </button></Link>

      <Link to = {'/home'}><button class="buttonQr">
            <div><img className='imgScan' src ={qr} alt="buttonScan"/></div>
      </button></Link>

      <Link to = {'/home'}><button class="buttonNfc">
            <div><img className='imgScan' src ={nfc} alt="buttonScan"/></div>
      </button></Link>
      </div>
    </div>
  )
}