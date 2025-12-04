import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";

import "./Cart.css";

export const Cart = () => {
  const { cart, clearCart, deleteItem, total, checkout } = useCartContext();

  return (
    <section className="cart-section container py-4">
      <h2 className="text-center mb-4">Carrito de compras</h2>

      {cart.length ? (
        <>
          <div className="row gy-3 mb-4">
            {cart.map((prod) => (
              <div key={prod.id} className="col-12 col-md-10 col-lg-8 mx-auto">
                <Item {...prod}>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-light text-dark cart-qty">
                      Cantidad: <strong>{prod.quantity}</strong>
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteItem(prod.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </Item>
              </div>
            ))}
          </div>

          <div className="cart-summary d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 border-top pt-3">
            <p className="fs-5 mb-0">
              Total a pagar:{" "}
              <span className="fw-bold">${total()}</span>
            </p>

            <div className="d-flex gap-2">
              <button className="btn btn-success" onClick={checkout}>
                Finalizar compra
              </button>
              <button className="btn btn-outline-secondary" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-4">
          <p className="mb-3">Tu carrito está vacío</p>
          <Link className="btn btn-primary" to="/">
            Volver al inicio
          </Link>
        </div>
      )}
    </section>
  );
};
