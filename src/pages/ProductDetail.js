import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { add } from "../store/cartSlice";
import "../style/ProductDetail.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  // console.log(id);
  const item = useSelector(state => state.cart.allProducts[0].find(p => p.id == id));
  // console.log(item)
  const handleGoHome = () => {
    navigate("/");
  }
  const handleAddToCart = (product) => {
    navigate("/");
    dispatch(add(product))
  }
  return (
    <Layout>
      <div className="product-detail">
      <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <br />
          <h3>{item.description}</h3>
          <br /><br />
          <h3>{item.category}</h3>
          <br />
          <h3>Price: {item.price}</h3>
          <br />
          <div className='btn'>
          <button onClick={()=>handleGoHome()}>Home</button>
          <button className='cart-btn' onClick={()=>handleAddToCart(item)}>Add To Cart</button>
          </div>
      </div>
    </Layout>
  )
}

export default ProductDetail;
