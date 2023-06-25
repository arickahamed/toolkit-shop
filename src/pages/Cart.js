import React from 'react';
import { MdAdd, MdRemove } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { add, remove } from '../store/cartSlice';
import "../style/Cart.css";

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.cartItems);
  console.log(products);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const handleAdd = (productId) => {
    dispatch(add(productId))
  }
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }
  const handleCartInfo = (productId) => {
    navigate(`/productDetail/${productId}`)
  }
  const handleGoHome = () => {
    navigate("/");
  }
  return (
    <Layout>
      {products.length > 0 ? (
        <div className="cart">
        {
          products.map(product => (
            <>
              <div className='cart-card'>
                <div className="cart-info" onClick={()=>handleCartInfo(product.id)}>
                <img src={product.image} alt={product.title} />
                <div className="title-price">
                  <h5>price: {product.price}</h5>
                  <h5>Quantity: {product.quantity}</h5>
                </div>
                </div>
                <div className="add-reomve-btn">
                <button className='add' onClick={()=>handleAdd(product)}>
                  <MdAdd />
                </button>
                <button className='remove' onClick={()=>handleRemove(product)}>
                  <MdRemove />
                </button>
                </div>
              </div>
            </>
          ))
        }
        <div className="total-price">
                <h2>Total Price: {Math.round(totalPrice)} </h2>
              </div>
      </div>
      ) : (
        <div className='empty-cart'>
          <h3>You Cart is empty</h3>
          <button className='empty-cart-btn' onClick={handleGoHome}>Go Home</button>
        </div>
      )}      
    </Layout>
  )
}

export default Cart;