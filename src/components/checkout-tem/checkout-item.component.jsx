import React from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  removeFromCheckout,
  addItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, removeFromCart, removeFromCheckout, addItem }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className='arrow' onClick={() => {
          if (quantity === 1) return null
          removeFromCheckout(item);
        }
          
           }>&#10094;</div>
        {quantity}
        <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className="price">${price} </span>
      <div className="remove" onClick={() => removeFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  removeFromCheckout: (item) => dispatch(removeFromCheckout(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
