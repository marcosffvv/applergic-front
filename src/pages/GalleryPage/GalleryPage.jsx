import "./GalleryPage.scss";
// import { Link } from "react-router-dom"
import { useContext, useEffect, useState} from "react"
import { JwtContext } from "../../shared/contexts/JwtContext"
import { API } from "../../shared/services/api"
import calendar from "../../assets/calendario.png"
import filter from "../../assets/filter.png"
import edit from "../../assets/edit.png"
import CrossComponet from '../../components/CrossComponet/CrossComponent'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'


export default function GalleryPage() {
  const [products, setProducts] = useState([]);
  // //
  // const [editing, setEditing] = useState(false);
  // const [editNotes, setEditNotes] = useState('');
  // //
  const {newUser, setUser} = useContext(JwtContext);
  // console.log("nuevousauario", JSON.parse(newUser));

  useEffect(() => {
    const getProducts = () => {
      API.get('products/populate').then(res => {
        setProducts(res.data);
        })
    }
    getProducts();
  }, []);

  return(
      <div className="gallery">

        editdiary
        <div className='gallery__cross'>  
            <CrossComponet ruta={'/home'}></CrossComponet>
        </div>

        <div className='gallery__tittle'>
           <p className='tittle-Bold'>Galería de productos</p>
        </div>

        <div className='gallery__products'>
          {products.map((item, index) => (
            <div key={index} className="gallery__products__div">

              <div className='gallery__products__div--img'>
                <img className='gallery__products__div--img-1' src={item.img} alt={item.name}/>
              </div>

              <div className='gallery__products__div--card'>
                <h3 className="dates">{item.name}</h3>
                <p>Marca: {item.brand}</p>
                <p>EAN: {item.EAN}</p>
                <br></br>
                <h4>Ingredientes:</h4>
                {item.components.map((component, i) => (
                  <ul key={i}>
                    <li>{component.name}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
  )
}