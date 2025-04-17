import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/cart-modal.css';

const CartModal = ({ closeModal }) => {
  const [show, setShow] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = item.price * (item.quantity || 1); 
    return total + itemTotal;
  }, 0);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`cart-modal ${show ? 'show' : ''}`}>
      <div className="modal-header">
        <h2>Cart Summary</h2>
        <button className="close-btn" onClick={closeModal}>X</button>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>${item.price} x {item.quantity || 1}</p>
              <p>= ${item.price * (item.quantity || 1)}</p>
            </div>
          </div>
        ))}
        <p className="total-line">
          مجموع السعر الكلي لكل المنتجات: <strong>${totalPrice.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
};

export default CartModal;
