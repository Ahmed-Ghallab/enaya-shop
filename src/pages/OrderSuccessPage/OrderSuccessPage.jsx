import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

export default function OrderSuccessPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.id.toString() === id) setOrder(parsed);
    }
  }, [id]);

  const printReceipt = () => {
    window.print();
  };

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No order found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-16 print:bg-white">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2 print:hidden">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaHome className="text-pink-500" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">Order Success</span>
        </nav>

        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6 print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-2">
                Order Confirmed 🎉
              </h1>
              <p className="text-sm text-gray-600">
                Order ID: <span className="font-medium">{order.id}</span>
              </p>
              <p className="text-sm text-gray-500">
                Date: {new Date(order.date).toLocaleString()}
              </p>
            </div>
            <div className="flex gap-3 print:hidden">
              <button
                onClick={printReceipt}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Print Receipt
              </button>
              <Link
                to="/"
                className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Back to Shop
              </Link>
            </div>
          </div>

          {/* Receipt */}
          <div id="receipt" className="print:p-0">
            <div className="grid md:grid-cols-2 gap-6 border-t pt-6">
              {/* Customer Details */}
              <div>
                <h3 className="text-base font-semibold text-gray-700 mb-3">
                  Customer Details
                </h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <span className="font-medium">Name: </span>
                    {order.shipping.fullName}
                  </p>
                  <p>
                    <span className="font-medium">Phone: </span>
                    {order.shipping.phone}
                  </p>
                  <p>
                    <span className="font-medium">Governorate: </span>
                    {order.shipping.governorate}
                  </p>
                  <p>
                    <span className="font-medium">Address: </span>
                    {order.shipping.addressLine}{" "}
                    {order.shipping.street && `, ${order.shipping.street}`}{" "}
                    {order.shipping.building &&
                      `, Bldg ${order.shipping.building}`}{" "}
                    {order.shipping.floor && `, Fl ${order.shipping.floor}`}{" "}
                    {order.shipping.apartment &&
                      `, Apt ${order.shipping.apartment}`}
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="text-base font-semibold text-gray-700 mb-3">
                  Order Summary
                </h3>
                <ul className="text-sm space-y-2">
                  {order.items.map((it) => (
                    <li
                      key={it.id}
                      className="flex justify-between text-gray-700"
                    >
                      <span>
                        {it.title} × {it.quantity}
                      </span>
                      <span className="font-medium">
                        {(it.price * it.quantity).toFixed(2)} EGP
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Totals */}
            <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-end gap-6">
              <div className="text-right">
                <div className="text-sm text-gray-600">Subtotal</div>
                <div className="text-lg font-semibold text-gray-800">
                  {order.subtotal.toFixed(2)} EGP
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Delivery</div>
                <div className="text-lg font-semibold text-gray-800">
                  {order.deliveryFee.toFixed(2)} EGP
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Total</div>
                <div className="text-2xl font-bold text-pink-600">
                  {order.total.toFixed(2)} EGP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
