import { toast } from "react-toastify";

export const getCartFromLocal = () => {
  const cart = localStorage.getItem("cart") || "[]";

  return JSON.parse(cart);
};

export const saveCartToLocal = (item) => {
  const cart = getCartFromLocal();

  const isAdded = cart.find((e) => e.id === item.id);

  if (isAdded) {
    toast.error("Item already exists in cart");
    return;
  }
  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));
  toast("Item added in cart");
};

export const deleteCart = (item) => {
  const cart = getCartFromLocal();

  const newCart = cart.filter((e) => e.id !== item.id);

  localStorage.setItem("cart", JSON.stringify(newCart));
  toast("Item removed !!");
};

export const getFavoritesFromLocal = () => {
  const favorites = localStorage.getItem("favorites") || "[]";

  return JSON.parse(favorites);
};

export const saveFavoritesToLocal = (item) => {
  const favorites = getFavoritesFromLocal();

  const isAdded = favorites.find((e) => e.id === item.id);

  if (isAdded) {
    toast.error("Item already exists in favorites");
    return;
  }
  favorites.push(item);

  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast("Item added in favorites");
};

export const deleteFavirte = (item) => {
  const favorites = getCartFromLocal();

  const newCart = favorites.filter((e) => e.id !== item.id);

  localStorage.setItem("favorites", JSON.stringify(newCart));
  toast("Item removed !!");
};
