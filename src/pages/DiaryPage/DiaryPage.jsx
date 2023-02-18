import React from 'react'
import "./DiaryPage.scss"
import axios from "axios"
import { useEffect, useState } from "react"


import CrossComponet from '../../components/CrossComponet/CrossComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

export default function DiaryPage() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
      const res = await axios.get("http://localhost:5001/products");
      console.log(res.data)
      setProducts(res.data)
  }

  useEffect(() => getProducts(), []);

  return(
      <>
      
          
         <div className='close'>
          <CrossComponet ruta={'/home'}></CrossComponet>
          <CrossComponet ruta={'/home'}></CrossComponet>
          <CrossComponet ruta={'/home'}></CrossComponet>
         </div>  
       
       <div className='tittle'>
         <p className='tittle-Bold'>¿Incluimos la <br></br> selección en tu <br></br> diario? </p>
         <p className='tittle-info'>Añade tus comentarios para <br></br> completar la información</p>
         
       </div>
    

       {products.map((item,index) => (
        <div className='products' key={index}>
            <div className='products-container'><img className='products-img' src={item.img} alt="" /></div>
            <div className='products-container_dates'>
              <p>fecha:</p>
              <figcaption>{item.name}</figcaption>
              <p>Notas:</p>
            </div>
            <div className='products-container_cross'>
            <CrossComponet ruta={'/home'}></CrossComponet>
            <CrossComponet ruta={'/home'}></CrossComponet>
            </div>
            {/* <p>{item.brand}</p> */}  
        </div> 
    ))}

      <div className='buttoncomponent'>
        <ButtonComponent ruta={'/home'} name={'Guardar'}></ButtonComponent>
        <ButtonComponent ruta={'/home'} name={'Generar informe'}></ButtonComponent>
      </div>
      </>
      
  ) 
}