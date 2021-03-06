import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsPrice,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../checkout-tem/checkout-item.component";
import StripeCheckoutButton from '../stripe-button/stripe-button.component';

import "./checkout.styles.scss";

const Checkout = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => {
      return <CheckoutItem key={cartItem.id} item={cartItem} />;
    })}
    <div className="total">
      <span>TOTAL: ${totalPrice}</span>
      
    </div>
    <StripeCheckoutButton price={totalPrice}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice,
});

export default connect(mapStateToProps)(Checkout);
