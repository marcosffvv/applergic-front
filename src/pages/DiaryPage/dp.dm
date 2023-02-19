import "./DiaryPage.scss"
import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import calendar from "../../assets/calendario.png"
import filter from "../../assets/filter.png"
import edit from "../../assets/edit.png"
// import { JwtContext } from '../../shared/contexts/JwtContext';

import CrossComponet from '../../components/CrossComponet/CrossComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'


export default function DiaryPage() {
  const [products, setProducts] = useState([]);
  // const {newUser} = useContext(JwtContext);

    useEffect(() => {
      const getProducts = async () => {
      const res = await axios.get("http://localhost:5001/products");
      console.log(res.data)
      setProducts(res.data)
    }

      getProducts();
    }, []);


  // console.log(newUser);
  // useEffect(() => {
  //   const postProducts = async () => {
  //     const res = await axios.post("http://localhost:5001/products/user", newUser);
  //     console.log(res.data)
  //     console.log('probando2');
  //     setProducts(res.data)
  //   }

  //   postProducts();
  // }, [newUser]);
  

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