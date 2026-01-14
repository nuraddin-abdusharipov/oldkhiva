import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout() {
    const { state } = useLocation();
    const navigate = useNavigate();

    // Agar state null bo‘lsa, Cart sahifasiga qayt
    useEffect(() => {
        if (!state || !state.cart) {
            navigate("/cart");
        }
    }, [state, navigate]);

    // Faqat state bo‘lsa ishlaydi
    const cart = state?.cart || [];
    const quantities = state?.quantities || {};

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const total = cart.reduce(
        (sum, item) => sum + item.price * (quantities[item.id] || 1),
        0
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !surname || !phone || !address) {
            alert("Iltimos barcha maydonlarni to‘ldiring!");
            return;
        }

        const token = "8580956137:AAG8GqysdXceCV_6A1UpQwMdTs5-ASGCxYg";
        const chat_id = "7787131118";

        const message = `
Yangi buyurtma 🛒
    Ism va familiya: ${name} ${surname}
    Telefon raqam: ${phone}
    Manzil: ${address}
    Jami: ${total} so'm
    Taomlar:
        ${cart.map(item => `- ${item.name} x${quantities[item.id] || 1} (${item.price} so'm)`).join("\n        ")}
`;

        try { await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id, text: message }), });
            alert("Buyurtmangiz yuborildi! ✅");
            setName("");
            setSurname("");
            setPhone("");
            setAddress(""); 
        }
               catch (err) { alert("Xatolik yuz berdi, qayta urinib ko‘ring."); console.error(err); }
    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Ism" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Familiya" value={surname} onChange={e => setSurname(e.target.value)} />
                <input type="text" placeholder="Telefon raqami" value={phone} onChange={e => setPhone(e.target.value)} />
                <textarea placeholder="Manzil" value={address} onChange={e => setAddress(e.target.value)} />
                <h3 className="total">Jami: {total} so'm</h3>
                <button type="submit" className="submit-btn">Yuborish ✅</button>
            </form>
        </div>
    );
}

export default Checkout;
