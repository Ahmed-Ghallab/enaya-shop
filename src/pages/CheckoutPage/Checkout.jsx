import { useState, useMemo } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import deliveryFees, { governoratesList } from "../../data/deliveryFees";
import { cartStore } from "../../store/cartStore";

export default function Checkout() {
  const { cartItems, removeFromCart } = cartStore();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [governorate, setGovernorate] = useState(governoratesList[0] || "");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const subtotal = useMemo(
    () => cartItems.reduce((s, it) => s + it.price * it.quantity, 0),
    [cartItems]
  );

  const deliveryFee = deliveryFees[governorate] ?? deliveryFees["default"] ?? 0;
  const total = useMemo(() => subtotal + deliveryFee, [subtotal, deliveryFee]);

  // ✅ فاليديشن
  const validate = () => {
    const e = {};
    if (!fullName.trim() || fullName.trim().length < 3)
      e.fullName = "Full name must be at least 3 characters";
    if (!/^\d{10,15}$/.test(phone.trim()))
      e.phone = "Enter a valid phone number";
    if (!addressLine.trim()) e.addressLine = "Address is required";
    if (!governorate) e.governorate = "Governorate is required";
    if (cartItems.length === 0) e.cart = "Cart is empty";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const placeOrder = () => {
    if (!validate()) return;
    setSubmitting(true);

    const orderId = `ENAYA-${Date.now().toString().slice(-8)}`;
    const date = new Date().toISOString();

    const order = {
      id: orderId,
      date,
      shipping: {
        fullName,
        phone,
        addressLine,
        street,
        building,
        floor,
        apartment,
        governorate,
        notes,
        paymentMethod,
      },
      items: cartItems.map((it) => ({
        id: it.id,
        title: it.title,
        price: it.price,
        quantity: it.quantity,
        total: +(it.price * it.quantity).toFixed(2),
        image: it.image,
      })),
      subtotal: +subtotal.toFixed(2),
      deliveryFee: +deliveryFee.toFixed(2),
      total: +total.toFixed(2),
    };

    setTimeout(() => {
      // ✅ مسح الكارت بعد الطلب
      if (typeof removeFromCart === "function") {
        cartItems.slice().forEach((it) => removeFromCart(it.id));
      }

      // ✅ حفظ الأوردر في localStorage
      localStorage.setItem("lastOrder", JSON.stringify(order));

      setSubmitting(false);
      navigate(`/order-success/${orderId}`);
    }, 800);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
            <Link to="/" className="flex items-center gap-1 hover:text-pink-600">
              <FaHome className="text-pink-500" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-pink-600 font-semibold">Checkout</span>
          </nav>

          <h1 className="text-4xl font-bold text-pink-600 mb-6">Checkout</h1>
          <p className="text-gray-700">
            Your cart is empty — add products to continue.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
          <Link to="/" className="flex items-center gap-1 hover:text-pink-600 transition">
            <FaHome className="text-pink-500" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">Checkout</span>
        </nav>

        <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* left: form */}
          <div>
            <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Shipping Details</h3>

              {/* full name + phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Full Name *</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                      errors.fullName ? "border-red-500" : "focus:ring-pink-500"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Phone *</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                      errors.phone ? "border-red-500" : "focus:ring-pink-500"
                    }`}
                    placeholder="01xxxxxxxxx"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* address */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Address *</label>
                <input
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2 ${
                    errors.addressLine ? "border-red-500" : ""
                  }`}
                  placeholder="Street / Area"
                />
                {errors.addressLine && (
                  <p className="text-xs text-red-500 mt-1">{errors.addressLine}</p>
                )}
              </div>

              {/* extra address fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input value={street} onChange={(e) => setStreet(e.target.value)} className="border rounded-lg px-3 py-2" placeholder="Street (Optional)" />
                <input value={building} onChange={(e) => setBuilding(e.target.value)} className="border rounded-lg px-3 py-2" placeholder="Building (Optional)" />
                <input value={floor} onChange={(e) => setFloor(e.target.value)} className="border rounded-lg px-3 py-2" placeholder="Floor (Optional)" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input value={apartment} onChange={(e) => setApartment(e.target.value)} className="border rounded-lg px-3 py-2" placeholder="Apartment (Optional)" />
                <select value={governorate} onChange={(e) => setGovernorate(e.target.value)} className="border rounded-lg px-3 py-2">
                  {governoratesList.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              {/* notes */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Order Notes (Optional)</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border rounded-lg px-3 py-2" rows={3} />
              </div>

{/* payment */}
<div>
  <h4 className="text-sm text-gray-600 mb-2">Payment Method</h4>
  <div className="flex gap-3">
    {/* ✅ Cash on Delivery */}
    <label
      className={`px-3 py-2 rounded-lg border cursor-pointer ${
        paymentMethod === "cod"
          ? "border-pink-500 bg-pink-50"
          : "border-gray-200 hover:border-pink-300"
      }`}
    >
      <input
        type="radio"
        name="pm"
        value="cod"
        checked={paymentMethod === "cod"}
        onChange={() => setPaymentMethod("cod")}
        className="mr-2 accent-pink-500"
      />
      Cash on Delivery
    </label>

    {/* 🚫 Online Payment (Disabled) */}
    <label
      className={`px-3 py-2 rounded-lg border opacity-60 cursor-not-allowed ${
        paymentMethod === "online" ? "border-pink-400 bg-pink-50" : "border-gray-200"
      }`}
      title="Online payment will be available soon"
    >
      <input
        type="radio"
        name="pm"
        value="online"
        disabled
        onChange={() => setPaymentMethod("online")}
        className="mr-2 accent-pink-500"
      />
      Online Payment (Soon)
    </label>
  </div>
</div>

{errors.cart && <p className="text-sm text-red-500">{errors.cart}</p>}

{/* ✅ place order */}
<div className="flex justify-between items-center gap-3 pt-3">
  <div>
    <div className="text-sm text-gray-600">Delivery Fee</div>
    <div className="text-lg font-semibold text-gray-800">
      {deliveryFee.toFixed(2)} EGP
    </div>
  </div>

  <button
    disabled={submitting}
    onClick={() => {
      // 🟢 تأكيد قبل تنفيذ الطلب
      const confirmOrder = window.confirm(
        "هل أنت متأكد من رغبتك في تنفيذ الطلب؟"
      );
      if (confirmOrder) {
        placeOrder();
      }
    }}
    className="ml-auto bg-pink-500 disabled:opacity-50 text-white py-2 px-5 rounded-lg hover:bg-pink-600 transition"
  >
    {submitting ? "Processing..." : "Place Order"}
  </button>
</div>

            </div>
          </div>

          {/* right: order summary */}
          <div>
            <div className="bg-white shadow-md rounded-2xl p-6 sticky top-20">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Summary</h3>
              <div className="space-y-3">
                {cartItems.map((it) => (
                  <div key={it.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={it.image} alt={it.title} className="w-14 h-14 object-cover rounded-md" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">{it.title}</div>
                        <div className="text-xs text-gray-500">x{it.quantity}</div>
                      </div>
                    </div>
                    <div className="font-medium text-gray-800">{(it.price * it.quantity).toFixed(2)} EGP</div>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4 space-y-2 text-right">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-600">Subtotal</div>
                  <div className="font-medium">{subtotal.toFixed(2)} EGP</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-600">Delivery</div>
                  <div className="font-medium">{deliveryFee.toFixed(2)} EGP</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold">Total</div>
                  <div className="text-2xl font-bold text-pink-600">{total.toFixed(2)} EGP</div>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-gray-500">
                Delivery fee varies by governorate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
