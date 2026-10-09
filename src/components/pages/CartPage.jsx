import { useCartProductContext } from "../../context/CartProductContext";

export default function CartPage() {
  const { cartProduct } = useCartProductContext();

  return (
    <>
      <div className="container">
        <h3>Carrello</h3>
        <div>
          {cartProduct.map((prod) => (
            <div key={prod.id}>
              {prod.title}
              <img
                src={prod.thumbnail}
                alt=""
              />
              {prod.description}
              {prod.price}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
