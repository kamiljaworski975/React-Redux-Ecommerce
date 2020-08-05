import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/cart.actions";

import "./cart-item.styles.scss";

const cartItem = ({ item, removeFromCart }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <div className='cart-remove' onClick={() => removeFromCart(item)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => dispatch(removeFromCart(item)),
});

export default connect(null, mapDispatchToProps)(cartItem);
