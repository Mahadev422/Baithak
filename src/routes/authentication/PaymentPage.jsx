import { useState, useEffect } from 'react';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [walletType, setWalletType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s/g, '').replace(/\D/g, '');
    const formatted = v.replace(/(.{4})/g, '$1 ').trim();
    return formatted.substring(0, 19);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleExpiryChange = (e) => {
    setExpiry(formatExpiry(e.target.value));
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value.replace(/\D/g, '').substring(0, 3));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment successful! Thank you for your purchase from Baithak.');
      setIsLoading(false);
    }, 2000);
  };

  // Order items data
  const orderItems = [
    {
      name: 'Premium Wooden Chair',
      details: 'Qty: 2 | Color: Mahogany',
      price: '₹12,000'
    },
    {
      name: 'Coffee Table Set',
      details: 'Qty: 1 | Size: Medium',
      price: '₹8,500'
    },
    {
      name: 'Cushion Set',
      details: 'Qty: 4 | Pattern: Geometric',
      price: '₹2,400'
    }
  ];

  const subtotal = '₹22,900';
  const shipping = '₹500';
  const tax = '₹2,062';
  const total = '₹25,462';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-5">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl animate-[slideUp_0.6s_ease-out] overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#2c3e50] to-[#3498db] text-white p-8 text-center overflow-hidden">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]"></div>
          <h1 className="text-4xl font-bold mb-2 relative z-10">Baithak</h1>
          <p className="text-lg opacity-90 relative z-10">Secure Payment Gateway</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Order Summary */}
          <div className="bg-gray-50 p-10 border-r border-gray-200">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded"></span>
              Order Summary
            </h2>
            
            {orderItems.map((item, index) => (
              <div 
                key={index}
                className="flex justify-between items-center py-4 border-b border-gray-200 transition-all duration-300 hover:bg-blue-50 hover:mx-[-20px] hover:px-5 hover:rounded-lg"
              >
                <div className="flex flex-col">
                  <div className="font-medium text-gray-800 mb-1">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.details}</div>
                </div>
                <div className="font-semibold text-green-600 text-lg">{item.price}</div>
              </div>
            ))}

            <div className="mt-5 pt-5 border-t-2 border-blue-500">
              <div className="flex justify-between mb-2 text-lg">
                <span>Subtotal:</span>
                <span>{subtotal}</span>
              </div>
              <div className="flex justify-between mb-2 text-lg">
                <span>Shipping:</span>
                <span>{shipping}</span>
              </div>
              <div className="flex justify-between mb-2 text-lg">
                <span>Tax:</span>
                <span>{tax}</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-gray-800 mt-4 pt-4 border-t border-gray-200">
                <span>Total:</span>
                <span>{total}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="p-10">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded"></span>
              Payment Details
            </h2>

            <div className="flex gap-4 mb-8">
              <div 
                className={`flex-1 p-5 border-2 rounded-xl text-center cursor-pointer transition-all duration-300 relative overflow-hidden ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50 translate-y-[-2px] shadow-lg' : 'border-gray-200'}`}
                onClick={() => handlePaymentMethodChange('card')}
              >
                <div className="text-3xl mb-2">💳</div>
                <div>Card</div>
              </div>
              <div 
                className={`flex-1 p-5 border-2 rounded-xl text-center cursor-pointer transition-all duration-300 relative overflow-hidden ${paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50 translate-y-[-2px] shadow-lg' : 'border-gray-200'}`}
                onClick={() => handlePaymentMethodChange('upi')}
              >
                <div className="text-3xl mb-2">📱</div>
                <div>UPI</div>
              </div>
              <div 
                className={`flex-1 p-5 border-2 rounded-xl text-center cursor-pointer transition-all duration-300 relative overflow-hidden ${paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50 translate-y-[-2px] shadow-lg' : 'border-gray-200'}`}
                onClick={() => handlePaymentMethodChange('wallet')}
              >
                <div className="text-3xl mb-2">👛</div>
                <div>Wallet</div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Card Form */}
              {paymentMethod === 'card' && (
                <div>
                  <div className="mb-6">
                    <label htmlFor="cardNumber" className="block font-medium text-gray-800 mb-2">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-white"
                    />
                  </div>

                  <div className="flex gap-4 mb-6">
                    <div className="flex-1">
                      <label htmlFor="expiry" className="block font-medium text-gray-800 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        id="expiry"
                        value={expiry}
                        onChange={handleExpiryChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-white"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="cvv" className="block font-medium text-gray-800 mb-2">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={handleCvvChange}
                        placeholder="123"
                        maxLength={3}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-white"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="cardName" className="block font-medium text-gray-800 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      id="cardName"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-white"
                    />
                  </div>
                </div>
              )}

              {/* UPI Form */}
              {paymentMethod === 'upi' && (
                <div className="mb-6">
                  <label htmlFor="upiId" className="block font-medium text-gray-800 mb-2">UPI ID</label>
                  <input
                    type="text"
                    id="upiId"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-white"
                  />
                </div>
              )}

              {/* Wallet Form */}
              {paymentMethod === 'wallet' && (
                <div className="mb-6">
                  <label htmlFor="walletType" className="block font-medium text-gray-800 mb-2">Select Wallet</label>
                  <select
                    id="walletType"
                    value={walletType}
                    onChange={(e) => setWalletType(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-white"
                  >
                    <option value="">Choose wallet...</option>
                    <option value="paytm">Paytm</option>
                    <option value="phonepe">PhonePe</option>
                    <option value="googlepay">Google Pay</option>
                    <option value="amazonpay">Amazon Pay</option>
                  </select>
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="email" className="block font-medium text-gray-800 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-white"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block font-medium text-gray-800 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-white"
                />
              </div>

              <div className="flex items-center gap-2 mt-3 text-sm text-green-600">
                <span>🔒</span>
                <span>Your payment information is encrypted and secure</span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full p-5 bg-gradient-to-br from-green-600 to-green-500 text-white border-none rounded-xl text-xl font-semibold cursor-pointer transition-all duration-300 mt-5 relative overflow-hidden ${isLoading ? 'opacity-70 pointer-events-none' : 'hover:translate-y-[-3px] hover:shadow-lg'}`}
              >
                Complete Payment {total}
                {isLoading && (
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