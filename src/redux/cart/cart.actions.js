import cartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_HIDDEN_CART
})

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeFromCart = (item) => ({
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: item
})

export const removeFromCheckout = item => ({
    type: cartActionTypes.REMOVE_FROM_CHECKOUT,
    payload: item
})


