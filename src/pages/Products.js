import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add, addAllProducts } from "../store/cartSlice";
import "../style/Products.css";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const handleProductDetail = (id) => {
    navigate(`/productDetail/${id}`)
  }
  const handleAdd = (product) => {
    dispatch(add(product));
  }

  useEffect(() => {
    const fetchProducts = async() => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // console.log(data);
      setProducts(data);
      dispatch(addAllProducts(data));
    };
    fetchProducts();
  }, []);
  return (
    <div className='products'>
      {
        products.map(product => (
          <div className="card" key={product.id}>
            <div onClick={()=> handleProductDetail(product.id)}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>Price: {product.price}</h5>
            </div>
            <button onClick={()=> handleAdd(product)}>Add To Cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products;