import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Har bir item uchun quantity state
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const increase = (id) =>
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));

  const decrease = (id) =>
    setQuantities(prev => ({ ...prev, [id]: Math.max(prev[id] - 1, 1) }));

  const total = cart.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0
  );

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart, quantities } });
  };

  return (
    <div className="container">
      <h2 style={{color:"white"}}>Sizning savatingiz</h2>
      {cart.length === 0 && <p style={{color: "white"}}>Savatingiz bo'sh</p>}

      <div className="cart-grid">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-img" />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>{item.price} so'm</p>

              {/* Quantity */}
              <div className="quantity">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{quantities[item.id]}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>

              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                O'chirish ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h3 className="total">Jami: {total} so'm</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Buyurtma berish 🛒
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
