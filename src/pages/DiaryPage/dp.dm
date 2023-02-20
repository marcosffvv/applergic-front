import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { JwtContext } from './JwtContext';

const DiaryProducts = () => {
  const { newUser } = useContext(JwtContext);
  const [diaryProducts, setDiaryProducts] = useState([]);

  useEffect(() => {
    const fetchDiaryProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/products/user/${newUser.id}`);
        setDiaryProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDiaryProducts();
  }, [newUser]);

  return (
    <div>
      <h2>Productos del diario</h2>
      <ul>
        {diaryProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryProducts;
