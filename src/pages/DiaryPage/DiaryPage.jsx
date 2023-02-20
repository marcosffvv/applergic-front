import "./DiaryPage.scss"
// import axios from "axios"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState} from "react"
// import { useContext } from "react"
import calendar from "../../assets/calendario.png"
import filter from "../../assets/filter.png"
import edit from "../../assets/edit.png"
// import { JwtContext } from '../../shared/contexts/JwtContext';

import CrossComponet from '../../components/CrossComponet/CrossComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { JwtContext } from "../../shared/contexts/JwtContext"
import { API } from "../../shared/services/api"


export default function DiaryPage() {
  const [products, setProducts] = useState([]);
  const {newUser} = useContext(JwtContext);

  useEffect(() => {
    const getProducts = () => {
      API.post('products/user', newUser).then(res => {
        setProducts(res.data);
        let arrayNuevo = res.data;
        // primero crear un array vacío
        // en ese array vacío se mete todos los datos
        // hay que añadir a products la fecha y las notas del usuario
        // ¿como?
        // buscando en el array   newUser.diaryProducts  por el campo _id
        // y una vez localizado, buscar dicho _id en el array products
        // y añadir dos propiedades nuevas. fecha y notas
        // se usa setProducts(nuevoarray)
        setProducts(arrayNuevo);
        console.log(res.data);       
        })      
    }
    getProducts();
  }, [newUser]);



  return(
      <>
         <div className='editDiary'>
         <Link to="/diary"><img className='editDiary-png' src ={calendar} alt="calendar"/></Link>
         <Link to="/diary"><img className='editDiary-png' src ={filter} alt="filter"/></Link>
         <CrossComponet ruta={'/home'}></CrossComponet>
         </div>  
       
       <div className='tittle'>
         <p className='tittle-Bold'>¿Incluimos la <br></br> selección en tu <br></br> diario? </p>
         <p className='tittle-info'>Añade tus comentarios para <br></br> completar la información</p>
       </div>
    

       {products.map((item,index) => (
        <div className='products' key={index}>
            <div className='products-container'>
              <img className='products-img' src={item.img} alt="" /></div>
            <div className='products-container_dates'>
              <p>fecha:</p>
              <figcaption>{item.name}</figcaption>
              <p>Notas:</p>
            </div>
            <div className='products-container_cross'>
            <CrossComponet ruta={'/home'}></CrossComponet>
            <Link to="/diary"><img className='editDiary-png' src ={edit} alt="edit"/></Link>
            </div>
            {/* <p>{item.brand}</p> */}  
        </div> 
    ))}
        <div className='btndiv'>
          <div className='btncomponent'>
          <ButtonComponent ruta={'/home'} name={'Guardar'}></ButtonComponent>
          <ButtonComponent ruta={'/home'} name={'Generar informe'}></ButtonComponent>
        </div>
        </div>
        
      </>
      
  ) 
}
