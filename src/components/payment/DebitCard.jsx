import React from "react";

const DebitCard = () => {
  return (
    <div>
      <div className="mb-6">
        <label htmlFor="cardNumber" className="block font-medium mb-2">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          className="w-full p-4 border-2 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-gray-800"
        />
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="expiry" className="block font-medium mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            placeholder="MM/YY"
            maxLength={5}
            className="w-full p-4 border-2 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-gray-800"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="cvv" className="block font-medium mb-2">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            placeholder="123"
            maxLength={3}
            className="w-full p-4 border-2 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-gray-800"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="cardName" className="block font-medium mb-2">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardName"
          placeholder="John Doe"
          className="w-full p-4 border-2 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-md focus:translate-y-[-2px] bg-gray-800"
        />
      </div>
    </div>
  );
};

export default DebitCard;
