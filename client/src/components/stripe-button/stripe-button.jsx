import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_si8N1fFZz46TLLImgMRMggFM00uHxvHjV7';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment was Successful!');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please use the provided credit card details');
    })
  };

  return (
    <StripeCheckout 
      label='Pay now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
