export const addItemToCart = (cartItems, addItemtoCart) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === addItemtoCart.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      (cartItem.id === addItemtoCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      ));
  }

  return [...cartItems, {...addItemtoCart, quantity: 1}];
};
