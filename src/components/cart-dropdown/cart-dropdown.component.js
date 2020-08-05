import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectHidden } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {!cartItems.length ? (
          <span className="empty">Your cart is empty</span>
        ) : null}
        {cartItems.map((cartitem) => {
          return <CartItem key={cartitem.id} item={cartitem} />;
        })}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
