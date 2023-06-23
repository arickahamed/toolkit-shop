import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Layout from '../components/Layout';
import { remove } from '../store/cartSlice';
import "../style/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.cartItems);
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }
  return (
    <Layout>
      <h3>Cart</h3>
      <div className="cart">
        {
          products.map(product => (
            <div className='cart-card'>
              <img src={product.image} alt={product.title} />
              <div className="title-price">
                <h5>{product.title}</h5>
                <h5>Price: {product.price}</h5>
              </div>
              <button className='remove' onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Cart;