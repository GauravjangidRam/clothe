import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component
import '../style/Payment.css';

const Payment = () => {
  const location = useLocation();
  const { cartItems = [], totalPrice } = location.state;
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [showPaymentButton, setShowPaymentButton] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false); // New state for payment processing

  const handlePaymentClick = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentOptionSelect = (option) => {
    setSelectedPaymentOption(option);
    setShowPaymentButton(true);
  };

  const handlePayment = () => {
    // Simulate payment processing
    setPaymentProcessing(true); // Show loader
    setTimeout(() => {
      setPaymentSuccessful(true);
      setPaymentProcessing(false); // Hide loader
    }, 3000);
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Page</h1>
      <div className="payment-details">
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>Product: {item.name}</p>
            <p>Size: {item.selectedSize}</p>
            <p>Color: {item.selectedColor}</p>
            <p>Price: ₹{item.newPrice}</p>
          </div>
        ))}
      </div>
      <p className="payment-total-price">Total Price: ₹{totalPrice}</p>

      {!showPaymentOptions && (
        <button className="payment-button" onClick={handlePaymentClick}>
          Proceed to Payment
        </button>
      )}

      {showPaymentOptions && (
        <div>
          <div className="payment-options">
            <h3>Select Payment Option</h3>
            <button
              className={`payment-option ${selectedPaymentOption === 'upi' ? 'selected' : ''}`}
              onClick={() => handlePaymentOptionSelect('upi')}
            >
              UPI
            </button>
            <button
              className={`payment-option ${selectedPaymentOption === 'phonepay' ? 'selected' : ''}`}
              onClick={() => handlePaymentOptionSelect('phonepay')}
            >
              PhonePay
            </button>
            <button
              className={`payment-option ${selectedPaymentOption === 'paytm' ? 'selected' : ''}`}
              onClick={() => handlePaymentOptionSelect('paytm')}
            >
              Paytm
            </button>
            <button
              className={`payment-option ${selectedPaymentOption === 'cod' ? 'selected' : ''}`}
              onClick={() => handlePaymentOptionSelect('cod')}
            >
              Cash on Delivery
            </button>
          </div>

          {showPaymentButton && (
            <div className="payment-details-form">
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email ID"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              <button className="payment-button" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          )}
        </div>
      )}

      {paymentProcessing && <Loader />} {/* Render loader when payment is processing */}

      {paymentSuccessful && (
        <div className="payment-successful">
          <h3>Payment Successful</h3>
          <p>Your payment is done. Thank you for your purchase!</p>
        </div>
      )
      }
      </div>
  );
}
export default Payment;