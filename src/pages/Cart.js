import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { remove } from '../store/cartSlice';
import "../style/Cart.css";

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const handleRemove = (productId) => {
    dispatch(remove(productId))
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
                <img src={product.image} alt={product.title} />
                <div className="title-price">
                  <h5>price: {product.price}</h5>
                  <h5>Price: {product.price}</h5>
                </div>
                <button className='remove' onClick={()=>handleRemove(product)}>Remove</button>
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