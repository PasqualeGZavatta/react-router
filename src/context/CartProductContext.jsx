import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartProductContext = createContext();

export function CartProductContextProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);

  function handleAddToCart(prod) {
    if (!cartProduct.find((item) => item.id === prod.id)) {
      console.log("added");
      setCartProduct((actual) => [...actual, prod]);
    } else {
      return;
    }
  }

  return (
    <>
      <CartProductContext.Provider
        value={{
          handleAddToCart,
          cartProduct,
        }}>
        {children}
      </CartProductContext.Provider>
    </>
  );
}

//eslint-disable-next-line
export function useCartProductContext() {
  const context = useContext(CartProductContext);
  if (!context) {
    throw new Error("Error context");
  }
  return context;
}
