import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../CartContext';
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div className='cart-1'>
        <div className='cart'>
          {cartItems.length === 0 ? (
            <>
              <h1>Your cart is Empty</h1>
              <div>
                <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="Empty Cart" />
              </div>
            </>
          ) : (
            <div>
              <h1>Your Cart</h1>
              <ul >
                {cartItems.map((item, index) => (
                  <li className='add-cart' key={index}>
                    <img src={item.image_url} alt={item.item_Name} style={{ width: '100px' }} />
                    <div>
                      <h2>{item.item_Name}</h2>
                      <p>Price: {item.price}</p>
                      <span className='star'>
                        <span className="material-symbols-outlined">star</span>
                        {item.rating}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Display the total price */}
              <div className="cart-total">
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
              </div>
            </div>
          )}
        </div>

        <button><Link to="/">Go To Home</Link></button>
      </div>
    </>
  );
}
