import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null);
    }
  };

  return (
    <div className="p-3 text-right">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button className="btn-brand-white mt-3" type="submit" disabled={!stripe}>
          Pay
      </button>
      </form>
      {
        paymentError && <p style={{color:"red", textAlign:"center"}}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{color:"green", textAlign:"center"}}>Your Payment was Successful</p>
      }
    </div>
  );
};

export default SimpleCardForm;