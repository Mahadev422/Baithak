import { useState } from "react";
import DebitCard from "../../components/payment/DebitCard";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addOrder } from "../../store/fetch/order";
import { showNotification } from "../../store/slices/notificationSlice";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [upiId, setUpiId] = useState("");
  const { orderItem, loading } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addOrder(orderItem));
    dispatch(showNotification({message: `Order confirmed of ${orderItem.total}`, type: 'success'}))
  };

  if (!orderItem) return <Navigate to="/cart" replace />;
  const total = orderItem.total;
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-5">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl animate-[slideUp_0.6s_ease-out] overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#2c3e50] to-[#3498db] text-white p-8 text-center overflow-hidden">
          <p className="bg-gray-800 p-2 text-2xl rounded-full font-bold">
            Please do not refresh
          </p>
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]"></div>
          <h1 className="text-4xl font-bold mb-2 relative z-10">Baithak</h1>
          <p className="text-lg opacity-90 relative z-10">
            Secure Payment Gateway
          </p>
        </div>

        {/* Main Content */}
        <div className="grid bg-gray-900 text-white min-h-[600px]">
          {/* Payment Form */}
          <div className="p-10">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded"></span>
              Payment Details
            </h2>

            <div className="flex gap-4 mb-8">
              <div
                className={`flex-1 p-5 border-2 rounded-xl text-center cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  paymentMethod === "cod"
                    ? "border-blue-500 bg-gray-800 translate-y-[-2px] shadow-lg"
                    : "border-gray-200"
                }`}
                onClick={() => handlePaymentMethodChange("cod")}
              >
                <div className="text-3xl mb-2">💵</div>
                <div>Cash</div>
              </div>
              <div
                className={`flex-1 p-5 border-2 rounded-xl text-center cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  paymentMethod === "card"
                    ? "border-blue-500 bg-gray-800 translate-y-[-2px] shadow-lg"
                    : "border-gray-200"
                }`}
                onClick={() => handlePaymentMethodChange("card")}
              >
                <div className="text-3xl mb-2">💳</div>
                <div>Card</div>
              </div>
              <div
                className={`flex-1 p-5 border-2 rounded-xl text-center cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  paymentMethod === "upi"
                    ? "border-blue-500 bg-gray-800 translate-y-[-2px] shadow-lg"
                    : "border-gray-200"
                }`}
                onClick={() => handlePaymentMethodChange("upi")}
              >
                <div className="text-3xl mb-2">📱</div>
                <div>UPI</div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Card Form */}
              {paymentMethod === "card" && <DebitCard />}

              {/* UPI Form */}
              {paymentMethod === "upi" && (
                <div className="mb-6">
                  <label htmlFor="upiId" className="block font-medium mb-2">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    id="upiId"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    className="w-full p-4 border-2 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-gray-800"
                  />
                </div>
              )}

              {/* Wallet Form */}
              {paymentMethod === "cod" && <p>Pay on Delivery</p>}

              <div className="flex items-center gap-2 mt-3 text-sm text-green-600">
                <span>🔒</span>
                <span>Your payment information is encrypted and secure</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full p-5 bg-gradient-to-br from-green-600 to-green-500 text-white border-none rounded-xl text-xl font-semibold cursor-pointer transition-all duration-300 mt-5 relative overflow-hidden ${
                  loading
                    ? "opacity-70 pointer-events-none"
                    : "hover:translate-y-[-3px] hover:shadow-lg"
                }`}
              >
                Complete Payment ₹ {total}
                {loading && (
                  <span className="inline-block ml-2">
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  </span>
                )}
              </button>
            </form>

            <div className="flex justify-center gap-5 mt-8 pt-5 border-t border-gray-200">
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <span>🛡</span>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <span>✅</span>
                <span>PCI Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <span>🔐</span>
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
