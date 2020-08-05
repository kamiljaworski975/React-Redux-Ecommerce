export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemsToRemove) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToRemove.id
  );

  if (existingCart.quantity > 1) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemsToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  } else {
      return [...cartItems]
  }
};
